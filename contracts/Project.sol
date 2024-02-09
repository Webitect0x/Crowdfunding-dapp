//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Project {
    enum ProjectState {
      Fundraising,
      Expired,
      Successful
    }

    struct WithdrawRequest{
      string description;
      uint256 amount;
      uint256 noOfVotes;
      mapping(address => bool) voters;
      bool isCompleted;
      address payable reciptent;
    }

    uint256 public numOfWithdrawRequests;
    address payable public creator;
    string public username;
    uint256 public minimumContribution;
    uint256 public deadline;
    uint256 public targetContribution;
    uint256 public raisedAmount;
    uint256 public noOfContributers;
    string public projectTitle;
    string public projectDes;
    string public ipfsImageHash;
    address[] public allContributors;
    ProjectState public state = ProjectState.Fundraising;

    mapping (address => uint) public contributors;
    mapping (uint256 => WithdrawRequest) public withdrawRequests;


    event WithdrawVote(address voter, uint totalVote);
    event FundingReceived(
      address contributor,
      uint amount,
      uint currentTotal
    );
    event WithdrawRequestCreated(
        uint256 requestId,
        string description,
        uint256 amount,
        uint256 noOfVotes,
        bool isCompleted,
        address reciptent
    );
    event AmountWithdrawSuccessful(
        uint256 requestId,
        string description,
        uint256 amount,
        uint256 noOfVotes,
        bool isCompleted,
        address reciptent
    );

    modifier isCreator(){
        require(msg.sender == creator,'You dont have access to perform this operation !');
        _;
    }

    modifier validateExpiry(ProjectState _state){
        require(state == _state,'Invalid state');
        require(block.timestamp < deadline,'Deadline has passed !');
        _;
    }

   constructor(
       address _creator,
       string memory _username,
       uint256 _minimumContribution,
       uint256 _deadline,
       uint256 _targetContribution,
       string memory _projectTitle,
       string memory _projectDes,
       string memory _ipfsImageHash
   ) {
        creator = payable(_creator);
        username = _username;
        minimumContribution = _minimumContribution;
        deadline = _deadline;
        targetContribution = _targetContribution;
        projectTitle = _projectTitle;
        projectDes = _projectDes;
        ipfsImageHash = _ipfsImageHash;
        state = ProjectState.Fundraising;
   }

    function contribute() public validateExpiry(ProjectState.Fundraising) payable {
        require(msg.value >= minimumContribution,'Contribution amount is too low !');

        if (contributors[msg.sender] == 0) {
            noOfContributers++;
            allContributors.push(msg.sender);
        }

        contributors[msg.sender] += msg.value;
        raisedAmount += msg.value;

        emit FundingReceived(msg.sender, msg.value, raisedAmount);
        checkFundingCompleteOrExpire();
    }

    function checkFundingCompleteOrExpire() internal {
        if (raisedAmount >= targetContribution){
            state = ProjectState.Successful;
        } else if (block.timestamp > deadline){
            state = ProjectState.Expired;
        }
    }

    function getContractBalance() public view returns(uint256){
        return address(this).balance;
    }

    function requestRefund() public validateExpiry(ProjectState.Expired) {
        require(contributors[msg.sender] > 0,'ERR_NOTHING_CONTRIBUTED');

        address payable user = payable(msg.sender);

        (bool success,) = user.call{value: contributors[msg.sender]}("");
        require(success, "ERR_TX_UNSUCCESSFUL");

        contributors[msg.sender] = 0;
    }

    function createWithdrawRequest(
        string memory _description,
        uint256 _amount,
        address payable _reciptent
    ) public isCreator()
    {
        require(state == ProjectState.Successful || state == ProjectState.Expired);
        WithdrawRequest storage newRequest = withdrawRequests[numOfWithdrawRequests];
        numOfWithdrawRequests++;

        newRequest.description = _description;
        newRequest.amount = _amount;
        newRequest.noOfVotes = 0;
        newRequest.isCompleted = false;
        newRequest.reciptent = _reciptent;

        emit WithdrawRequestCreated(numOfWithdrawRequests,_description, _amount,0,false,_reciptent );
    }

    function voteWithdrawRequest(uint256 _requestId) public {
        require(contributors[msg.sender] > 0,'ERR_MUST_CONTRIBUTE');
        WithdrawRequest storage requestDetails = withdrawRequests[_requestId];
        require(requestDetails.voters[msg.sender] == false,'ERR_ALREADY_VOTED');

        requestDetails.voters[msg.sender] = true;
        requestDetails.noOfVotes += 1;

        emit WithdrawVote(msg.sender,requestDetails.noOfVotes);
    }

    function withdrawRequestedAmount(uint256 _requestId) isCreator() validateExpiry(ProjectState.Successful) public{
        WithdrawRequest storage requestDetails = withdrawRequests[_requestId];
        require(requestDetails.isCompleted == false,'REQUEST_COMPLETED');
        require(requestDetails.noOfVotes >= noOfContributers / 2,'ERR_NOT_ENOUGH_VOTES');
        (bool success,) = requestDetails.reciptent.call{value: requestDetails.amount}("");
        require(success, "ERR_TX_FAILED");
        requestDetails.isCompleted = true;

        emit AmountWithdrawSuccessful(
            _requestId,
            requestDetails.description,
            requestDetails.amount,
            requestDetails.noOfVotes,
            true,
            requestDetails.reciptent
        );

    }

    function getContributor(address contributor) public view returns (uint) {
        return contributors[contributor];
    }

    function getContributors() public view returns(address[] memory){
        return allContributors;
    }
}