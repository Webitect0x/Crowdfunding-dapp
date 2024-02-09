"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { parseEther, formatEther } from "viem";
import { MediaRenderer } from "@thirdweb-dev/react";
import { colorMaker } from "@/utils/colorMaker";
import { currentState } from "@/utils/currentState";
import useProjectFunctions from "@/hooks/useProjectFunctions";
import toast from "react-hot-toast";
import Link from "next/link";

const FundRaiserCard = ({ contractAddress }) => {
  const [amount, setAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const { address } = useAccount();
  const {
    state,
    username,
    description,
    minContribution,
    contractBalance,
    contractCreator,
    title,
    targetContribution,
    deadline,
    contribute,
    createWithdrawRequest,
    ipfsImageHash,
  } = useProjectFunctions(contractAddress);

  console.log(minContribution);

  const progress = () => {
    return Math.round(
      ((Number(contractBalance) + Number(amount)) /
        Number(targetContribution)) *
        100
    );
  };

  const contributeAmount = () => {
    if (amount < minContribution) {
      toast.error(
        `Minimum contribution amount is ${formatEther(minContribution)} ETH`
      );
      return;
    }

    contribute({
      from: address,
      value: parseEther(amount),
    });
  };

  const requestForWithdraw = () => {
    const data = {
      description: `${withdrawAmount} ETH requested for withdraw`,
      amount: parseEther(withdrawAmount),
      recipient: address,
    };

    createWithdrawRequest({
      args: [data.description, data.amount, data.recipient],
    });

    setWithdrawAmount(0);
  };

  return (
    <div className="card relative overflow-hidden my-4">
      <div className="flex">
        <div className="p-2">
          <MediaRenderer src={ipfsImageHash} />
        </div>
        <div className="w-full">
          <div className={`ribbon ${colorMaker(state)}`}>
            {currentState(state)}
          </div>
          <Link href={`/project-details/${contractAddress}`}>
            <h1 className="font-sans text-xl text-gray font-semibold hover:text-sky-500 hover:cursor-pointer">
              {title}
            </h1>
          </Link>
          <p className="font-sans text-sm text-stone-800 tracking-tight">
            {description}
          </p>
          <div className="flex flex-col lg:flex-row">
            <div className="inner-card my-6 w-full lg:w-2/5">
              <p className="text-md font-bold font-sans text-gray">
                Username :
              </p>
              <p className="text-sm font-bold font-sans text-gray-600 ">
                {username}
              </p>
              <p className="text-md font-bold font-sans text-gray">
                Targeted contribution
              </p>
              <p className="text-sm font-bold font-sans text-gray-600 ">
                {targetContribution !== undefined &&
                  formatEther(targetContribution)}
                ETH
              </p>
              <p className="text-md font-bold font-sans text-gray">Deadline</p>
              <p className="text-sm font-bold font-sans text-gray-600 ">
                {Number(deadline)}
              </p>
            </div>
            <div className="inner-card my-6 w-full lg:w-3/5">
              {state !== 2 ? (
                <>
                  <label className="text-sm text-gray-700 font-semibold">
                    Contribution amount :
                  </label>
                  <div className="flex flex-row">
                    <input
                      type="number"
                      placeholder="Type here"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="input rounded-l-md"
                    />

                    <button
                      className="button"
                      onClick={() => contributeAmount()}
                    >
                      Contribute
                    </button>
                  </div>
                  <p className="text-sm text-red-600">
                    <span className="font-bold">NOTE : </span> Minimum
                    contribution is
                    {minContribution !== undefined &&
                      formatEther(minContribution)}
                    ETH
                  </p>
                </>
              ) : (
                <>
                  <p className="text-md font-bold font-sans text-gray">
                    Contract balance
                  </p>
                  <p className="text-sm font-bold font-sans text-gray-600 ">
                    {formatEther(
                      targetContribution !== undefined && contractBalance
                    )}
                    ETH
                  </p>
                  {contractCreator === address &&
                    Number(contractBalance) !== 0 && (
                      <>
                        <label className="text-sm text-gray-700 font-semibold">
                          Withdraw request :
                        </label>
                        <div className="flex flex-row">
                          <input
                            type="number"
                            placeholder="Type here"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                            className="input rounded-l-md"
                          />
                          <button
                            className="button"
                            onClick={() => requestForWithdraw()}
                          >
                            Withdraw
                          </button>
                        </div>
                      </>
                    )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {state !== 2 ? (
        <div className="w-full bg-gray-200 rounded-full">
          <div className="progress" style={{ width: `${progress()}%` }}>
            {progress()}%
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FundRaiserCard;
