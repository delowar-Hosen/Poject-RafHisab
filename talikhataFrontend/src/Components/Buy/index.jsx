import React from "react";
import Title from "../../Reuseable Components/Title";
import { FaUserEdit } from "react-icons/fa";
import InputField from "../../Reuseable Components/Input Field";
import Button from "../../Reuseable Components/Button";
import { AiFillFileAdd } from "react-icons/ai";

import AddIcon from "../../Reuseable Components/Add Option Icon";

const Buy = () => {
  return (
    <div>
      <div className="px-4 py-2 rounded-md bg-[#0000006b]">
        <div>
          <Title title="Buy" />
        </div>
        <div className=" mt-[15px] w-full h-[1px] bg-[#d5d5d5]"></div>
        <div className="  mt-5 flex gap-y-2 flex-wrap items-center justify-between ml-5">
          <div className=" relative w-full">
            <InputField
              itemName="Name"
              className="px-2 py-1 text-xs  border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
              placeHolder="Enter goods name"
            />{" "}
            <AddIcon className=" absolute top-1 right-3" />
          </div>
          <InputField
            itemName="amount"
            className="px-2 py-1 text-xs border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
            placeHolder="Enter goods amount"
          />{" "}
          <InputField
            itemName="price"
            className="px-2 py-1 text-xs border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
            placeHolder="Enter Unit Price"
          />{" "}
          <InputField
            itemName="discount"
            className="px-2 py-1 text-xs border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
            placeHolder="discount"
          />{" "}
        </div>
        <div className=" mt-5 flex justify-end">
          <Button
            buttonName="add to stock"
            buttonIcon={<AiFillFileAdd className=" text-[#ffffff]" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Buy;
