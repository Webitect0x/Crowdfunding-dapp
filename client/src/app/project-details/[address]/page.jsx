"use client";

import FundRaiserCard from "@/components/FundRaiserCard";
import Contributors from "@/components/Contributors";
import WithdrawRequestCard from "@/components/WithdrawRequestCard";
import useProjectFunctions from "@/hooks/useProjectFunctions";
import Loader from "@/components/Loader";

const ProjectDetails = ({ params }) => {
  const { contributors, withdrawRequests } = useProjectFunctions(
    params.address
  );

  const componentArray = Array.from(
    { length: Number(withdrawRequests) },
    (_, index) => index
  );

  return (
    <div className="px-2 py-4 flex flex-col lg:px-12 lg:flex-row ">
      <div className="lg:w-7/12 my-2 lg:my-0 lg:mx-2">
        <FundRaiserCard contractAddress={params.address} />

        <div>
          {Number(withdrawRequests) && Number(withdrawRequests) > 0 ? (
            <div>
              <h1 className="font-sans text-xl text-gray font-semibold">
                Withdraw requests
              </h1>
              {componentArray.map((index) => (
                <WithdrawRequestCard
                  withdrawReq={index}
                  contractAddress={params.address}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <p>Withdraw requests not found</p>
          )}
        </div>
      </div>
      <div className="card lg:w-5/12 h-screen my-4 overflow-y-hidden hover:overflow-y-auto">
        <h1 className="font-sans font-bold text-xl">All contributors</h1>
        {contributors && contributors.length > 0 ? (
          contributors.map((contributorAddress, i) => (
            <Contributors
              contractAddress={params.address}
              contributorAddress={contributorAddress}
              key={i}
            />
          ))
        ) : (
          <p>Contributors not found</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
