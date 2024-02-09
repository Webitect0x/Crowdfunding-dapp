"use client";

import FundForm from "@/components/FundForm";
import FundRaiserCard from "@/components/FundRaiserCard";
import useCrowdfundingFunctions from "@/hooks/useCrowdfundingFunctions";

const Home = () => {
  const { projectsList } = useCrowdfundingFunctions();

  if (projectsList === undefined) {
    return;
  }

  const renderedProjects = projectsList.map((project, i) => {
    return projectsList !== undefined ? (
      projectsList.length > 0 ? (
        <FundRaiserCard contractAddress={project} key={i} />
      ) : (
        <h1 className="text-2xl font-bold text-gray-500 text-center font-sans">
          No project found !
        </h1>
      )
    ) : (
      <Loader />
    );
  });

  return (
    <div className="px-2 py-4 flex flex-col lg:px-12 lg:flex-row ">
      <div className="lg:w-7/12 my-2 lg:my-0 lg:mx-2">{renderedProjects}</div>
      <div className="card lg:w-5/12 h-fit my-4">
        <FundForm />
      </div>
    </div>
  );
};

export default Home;
