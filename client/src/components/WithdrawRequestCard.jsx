"use client";

import { PROJECT_ABI } from "@/constants/constants";
import { useContractRead, useAccount, useContractWrite } from "wagmi";
import { formatEther } from "viem";
import { truncate } from "truncate-ethereum-address";

const WithdrawRequestCard = ({ withdrawReq, contractAddress }) => {
  const { address } = useAccount();

  const { data: withdrawRequestData } = useContractRead({
    address: contractAddress,
    abi: PROJECT_ABI,
    functionName: "withdrawRequests",
    args: [withdrawReq],
  });

  const { write: voteWithdrawRequest } = useContractWrite({
    address: contractAddress,
    abi: PROJECT_ABI,
    functionName: "voteWithdrawRequest",
    args: [withdrawReq],
  });

  const { write: withdrawRequestedAmount } = useContractWrite({
    address: contractAddress,
    abi: PROJECT_ABI,
    functionName: "withdrawRequestedAmount",
    args: [withdrawReq],
  });

  if (withdrawRequestData === undefined) {
    return;
  }

  const [description, amount, voteCount, isCompleted, recipent] =
    withdrawRequestData;

  return (
    <div className="card relative overflow-hidden my-4">
      <div className="flex items-center justify-between">
        <h1 className="font-sans text-xl text-gray font-semibold">
          {description}
        </h1>
        <div
          className={`px-2 text-white rounded-sm ${
            isCompleted ? "bg-emerald-500" : "bg-yellow-500"
          }`}
        >
          {isCompleted ? "Campaign Compeleted" : "Campaign In Progress"}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="inner-card my-6 w-full lg:w-2/5">
          <p className="text-md font-bold font-sans text-gray">
            Requested amount
          </p>
          <p className="text-sm font-bold font-sans text-gray-600 ">
            {formatEther(amount)} ETH
          </p>
          <p className="text-md font-bold font-sans text-gray">Total votes</p>
          <p className="text-sm font-bold font-sans text-gray-600 ">
            {Number(voteCount)}
          </p>
        </div>
        <div className="inner-card my-6 w-full lg:w-3/5">
          <p className="text-md font-bold font-sans text-gray">
            Reciptant address
          </p>
          <p className="text-sm font-bold font-sans text-gray-600 w-40 truncate ">
            {truncate(recipent)}
          </p>
          {address === recipent ? (
            <button
              className="withdraw-button"
              onClick={() => withdrawRequestedAmount()}
              disabled={isCompleted}
            >
              Withdraw
            </button>
          ) : (
            <button
              className="withdraw-button"
              onClick={() => voteWithdrawRequest()}
            >
              Vote
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawRequestCard;
