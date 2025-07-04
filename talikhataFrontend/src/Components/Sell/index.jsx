import React from "react";
import Button from "../../Reuseable Components/Button";
import InputField from "../../Reuseable Components/Input Field";
import { FaUserEdit } from "react-icons/fa";
import Title from "../../Reuseable Components/Title";
import { IoMdPersonAdd } from "react-icons/io";
import AddIcon from "../../Reuseable Components/Add Option Icon";
import { CiViewList } from "react-icons/ci";
import { VscOpenPreview } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";

const Sell = () => {
  return (
    <div>
      <div className=" p-4 rounded-md bg-[#0000006b]">
        <div>
          <Title title="Sell" />
        </div>
        <div className=" mt-[15px] w-full h-[1px] bg-[#d5d5d5]"></div>

        <div className="  mt-[47px] flex gap-y-2 flex-wrap items-center justify-between ml-5">
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
            placeHolder="Enter discount in taka"
          />{" "}
        </div>
        <div className=" mt-5 flex  justify-end gap-x-1">
          <Button
            buttonName="preview"
            buttonIcon={<VscOpenPreview className=" text-[#ffffff]" />}
            className="text-xs"
          />
          <Button
            buttonName="add To list"
            buttonIcon={<CiViewList className=" text-[#ffffff]" />}
            className="text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Sell;
