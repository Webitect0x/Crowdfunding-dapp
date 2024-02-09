//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import './Project.sol';

contract Crowdfunding {
   Project[] private projects;
   mapping(address => Project) public getProject;

   event ProjectStarted(
      address projectContractAddress,
      address creator,
      string username,
      uint256 minContribution,
      uint256 projectDeadline,
      uint256 goalAmount,
      uint256 currentAmount,
      uint256 noOfContributors,
      string title,
      string desc,
      string imageHash,
      uint256 currentState
   );

   function createProject(
      string memory username,
      uint256 minimumContribution,
      uint256 deadline,
      uint256 targetContribution,
      string memory projectTitle,
      string memory projectDesc,
      string memory ipfsImageHash
   ) public {
      Project newProject = new Project(
         msg.sender,
         username,
         minimumContribution,
         deadline,
         targetContribution,
         projectTitle,
         projectDesc,
         ipfsImageHash
      );

      getProject[address(newProject)] = newProject;

      projects.push(newProject);

      emit ProjectStarted(
         address(newProject) ,
         msg.sender,
         username,
         minimumContribution,
         deadline,
         targetContribution,
         0,
         0,
         projectTitle,
         projectDesc,
         ipfsImageHash,
         0
      );

   }

   function returnAllProjects() external view returns(Project[] memory){
      return projects;
   }
}

