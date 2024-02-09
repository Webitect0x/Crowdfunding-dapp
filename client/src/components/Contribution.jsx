import { formatEther } from "viem";
import useProjectFunctions from "@/hooks/useProjectFunctions";
import Link from "next/link";

const Contribution = ({ contractAddress }) => {
  const { ethAmount } = useProjectFunctions(contractAddress);

  if (ethAmount == undefined) {
    return;
  }

  if (formatEther(ethAmount) > 0)
    return (
      <div className="inner-card my-2 flex flex-row w-full lg:w-1/4">
        <div className="lg:w-1/5">
          <div className="p-6 w-8 h-8 mx-auto my-auto rounded-md bg-slate-300 "></div>
        </div>
        <div className="lg:w-4/5">
          <Link href={`/project-details/${contractAddress}`}>
            <p className="text-md font-bold text-gray-800 w-40 truncate cursor-pointer ">
              {contractAddress}
            </p>
          </Link>
          <p className="text-sm font-bold text-gray-500">
            {formatEther(ethAmount)} ETH
          </p>
        </div>
      </div>
    );
};

export default Contribution;
