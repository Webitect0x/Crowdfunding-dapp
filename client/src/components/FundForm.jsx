"use client";

import { useState, useReducer } from "react";
import { parseEther } from "viem";
import { useStorageUpload } from "@thirdweb-dev/react";
import ForumButton from "@/components/FormButton";
import useCrowdfundingFunctions from "@/hooks/useCrowdfundingFunctions";

const fundFormState = {
  username: "",
  title: "",
  description: "",
  targetedContributionAmount: "",
  minimumContributionAmount: "",
  deadline: "",
};

const FundForm = () => {
  const { mutateAsync: upload } = useStorageUpload();
  const { createProject } = useCrowdfundingFunctions();
  const [state, dispatch] = useReducer(fundFormState);

  const [formFields, setFormFields] = useState(fundFormState);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const file = [e.target[5].files[0]];
    const uris = await upload({ data: file });
    const unixTimestamp = Math.round(
      new Date(formFields.deadline).getTime() / 1000
    );

    createProject({
      args: [
        formFields.username,
        parseEther(formFields.minimumContributionAmount),
        unixTimestamp,
        parseEther(formFields.targetedContributionAmount),
        formFields.title,
        formFields.description,
        uris,
      ],
    });

    setFormFields({
      username: "",
      title: "",
      description: "",
      targetedContributionAmount: "",
      minimumContributionAmount: "",
      image: "",
      deadline: "",
    });
  };

  return (
    <>
      <h1 className="font-sans font-bold text-xl">
        Start a fund raiser for free
      </h1>
      <form onSubmit={onSubmitForm}>
        <div className="form-control my-1">
          <label className="text-sm text-gray-700">Username :</label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control-input border-neutral-400 focus:ring-neutral-200"
            value={formFields.username}
            onChange={(e) =>
              setFormFields({
                ...formFields,
                username: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-control my-1">
          <label className="text-sm text-gray-700">Title :</label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control-input border-neutral-400 focus:ring-neutral-200"
            value={formFields.title}
            onChange={(e) =>
              setFormFields({
                ...formFields,
                title: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-control my-1">
          <label className="text-sm text-gray-700">Description :</label>
          <textarea
            placeholder="Type here"
            className="form-control-input border-neutral-400 focus:ring-neutral-200"
            value={formFields.description}
            onChange={(e) =>
              setFormFields({ ...formFields, description: e.target.value })
            }
            required
          ></textarea>
        </div>
        <div className="form-control my-1">
          <label className="text-sm text-gray-700">
            Targeted contribution amount :
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="form-control-input border-neutral-400 focus:ring-neutral-200"
            value={formFields.targetedContributionAmount}
            onChange={(e) =>
              setFormFields({
                ...formFields,
                targetedContributionAmount: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-control my-1">
          <label className="text-sm text-gray-700">
            Minimum contribution amount :
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="form-control-input border-neutral-400 focus:ring-neutral-200"
            value={formFields.minimumContributionAmount}
            onChange={(e) =>
              setFormFields({
                ...formFields,
                minimumContributionAmount: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-control my-1">
          <label className="text-sm text-gray-700">Image :</label>
          <input
            type="file"
            className="form-control-input border-neutral-400 focus:ring-neutral-200"
            required
          />
        </div>
        <div className="form-control date-picker my-1">
          <label className="text-sm text-gray-700">Deadline :</label>
          <input
            type="date"
            placeholder="Type here"
            className="form-control-input border-neutral-400 focus:ring-neutral-200"
            value={formFields.deadline}
            onChange={(e) =>
              setFormFields({ ...formFields, deadline: e.target.value })
            }
            required
          />
        </div>
        <ForumButton>Fund</ForumButton>
      </form>
    </>
  );
};

export default FundForm;
