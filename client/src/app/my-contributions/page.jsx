"use client";

import { useAccount } from "wagmi";
import useCrowdfundingFunctions from "@/hooks/useCrowdfundingFunctions";
import Loader from "@/components/Loader";
import Contribution from "@/components/Contribution";

const MyContributions = () => {
  const { address } = useAccount();
  const { projectsList } = useCrowdfundingFunctions();

  const contributions = projectsList?.map((item) => {
    return <Contribution contractAddress={item} userAddress={address} />;
  });

  return (
    <div className="px-2 py-4 flex flex-wrap lg:px-12 lg:flex-row ">
      {contributions ? (
        contributions.length > 0 ? (
          contributions
        ) : (
          <p className="text-center">
            You didn't contributed in any project yet !
          </p>
        )
      ) : (
        <div className="w-full">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default MyContributions;
