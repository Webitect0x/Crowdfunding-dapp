"use client";

import { useContractRead, useContractWrite, useAccount } from "wagmi";
import { PROJECT_ABI } from "@/constants/constants";
import toast from "react-hot-toast";

const useProjectFunctions = (contractAddress) => {
  const { address } = useAccount();

  const projectContract = {
    address: contractAddress,
    abi: PROJECT_ABI,
  };

  const { data: ethAmount } = useContractRead({
    ...projectContract,
    functionName: "getContributor",
    args: [address],
  });

  const { data: username } = useContractRead({
    ...projectContract,
    functionName: "username",
  });

  const { data: ipfsImageHash } = useContractRead({
    ...projectContract,
    functionName: "ipfsImageHash",
  });

  const { data: contributors } = useContractRead({
    ...projectContract,
    functionName: "getContributors",
  });

  const { data: withdrawRequests } = useContractRead({
    ...projectContract,
    functionName: "numOfWithdrawRequests",
  });

  const { data: state } = useContractRead({
    ...projectContract,
    functionName: "state",
  });

  const { data: description } = useContractRead({
    ...projectContract,
    functionName: "projectDes",
  });

  const { data: minContribution } = useContractRead({
    ...projectContract,
    functionName: "minimumContribution",
  });

  const { data: contractBalance } = useContractRead({
    ...projectContract,
    functionName: "getContractBalance",
  });

  const { data: contractCreator } = useContractRead({
    ...projectContract,
    functionName: "creator",
  });

  const { data: title } = useContractRead({
    ...projectContract,
    functionName: "projectTitle",
  });

  const { data: targetContribution } = useContractRead({
    ...projectContract,
    functionName: "targetContribution",
  });

  const { data: deadline } = useContractRead({
    ...projectContract,
    functionName: "deadline",
  });

  const { data: contributeFuncData, write: contribute } = useContractWrite({
    ...projectContract,
    functionName: "contribute",
    onSuccess() {
      toast.success("Transaction Was Successful!");
    },
    onError() {
      toast.error("Transaction Failed");
    },
  });

  const { write: createWithdrawRequest } = useContractWrite({
    ...projectContract,
    functionName: "createWithdrawRequest",
    onSuccess() {
      toast.success("Successfully Requested For Withdraw");
    },
    onError() {
      toast.error("Withdraw Request Failed");
    },
  });

  return {
    ethAmount,
    username,
    contributors,
    withdrawRequests,
    state,
    description,
    minContribution,
    contractBalance,
    contractCreator,
    title,
    targetContribution,
    deadline,
    contribute,
    contributeFuncData,
    ipfsImageHash,
    createWithdrawRequest,
  };
};
export default useProjectFunctions;
