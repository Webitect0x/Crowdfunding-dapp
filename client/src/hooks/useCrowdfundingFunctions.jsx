"use client";

import { useContractRead, useContractWrite } from "wagmi";
import { CONTRACT_ADDRESS, CROWDFUNDING_ABI } from "@/constants/constants";

const useCrowdfundingFunctions = () => {
  const { data: projectsList } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CROWDFUNDING_ABI,
    functionName: "returnAllProjects",
  });

  const { write: createProject } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CROWDFUNDING_ABI,
    functionName: "createProject",
  });

  return {
    projectsList,
    createProject,
  };
};

export default useCrowdfundingFunctions;
