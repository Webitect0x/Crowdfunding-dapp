"use client";

import { useContractRead } from "wagmi";
import { formatEther } from "viem";
import { truncate } from "truncate-ethereum-address";
import { PROJECT_ABI } from "@/constants/constants";
import useProjectFunctions from "@/hooks/useProjectFunctions";

const Contributors = ({ contractAddress, contributorAddress }) => {
  const { username } = useProjectFunctions(contractAddress);
  const { data: contributorAmount } = useContractRead({
    address: contractAddress,
    abi: PROJECT_ABI,
    functionName: "getContributor",
    args: [contributorAddress],
  });

  return (
    <div className="inner-card my-2 flex flex-row items-center">
      <div className="lg:w-1/5">
        <div className="p-6 w-8 h-8 mx-auto my-auto rounded-md bg-slate-300 "></div>
      </div>
      <div className="lg:w-4/5">
        <p className="text-md font-bold text-gray-800">Username :</p>
        <p className="text-sm font-bold text-gray-500">{username}</p>
        <p className="text-md font-bold text-gray-800 w-40 truncate ">
          {truncate(contributorAddress)}
        </p>
        <p className="text-sm font-bold text-gray-500">
          {formatEther(contributorAmount)} ETH
        </p>
      </div>
    </div>
  );
};

export default Contributors;
