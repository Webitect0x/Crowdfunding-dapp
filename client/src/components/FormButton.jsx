"use client";

import { useFormStatus } from "react-dom";
import Loader from "./Loader";

const FormButton = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <button className="p-2 w-full bg-[#F56D91] text-white rounded-md hover:bg-[#d15677]">
      {pending ? <Loader /> : children}
    </button>
  );
};

export default FormButton;
