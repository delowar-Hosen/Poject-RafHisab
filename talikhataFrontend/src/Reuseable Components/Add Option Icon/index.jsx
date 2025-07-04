import React from "react";
import { IoIosAdd } from "react-icons/io";

const AddIcon = ({ className }) => {
  return (
    <div
      className={`${className} w-[20px] h-[20px] border-[#0000002c] rounded-full cursor-pointer bg-[#ffffff] border flex justify-center items-center`}
    >
      <IoIosAdd />
    </div>
  );
};

export default AddIcon;
