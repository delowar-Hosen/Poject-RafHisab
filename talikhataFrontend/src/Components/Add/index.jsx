import React from "react";
import ImageLink from "../../Reuseable Components/Link Image";
import { FaUserEdit } from "react-icons/fa";
import InputField from "../../Reuseable Components/Input Field";
import { IoMdPersonAdd } from "react-icons/io";
import Title from "../../Reuseable Components/Title";
import Button from "../../Reuseable Components/Button";

const AddPepole = () => {
  return (
    <div>
      <div className="p-4 rounded-md bg-[#0000006b]">
        <div>
          <Title title="add Pepole" />
        </div>
        <div className=" mt-[15px] w-full h-[1px] bg-[#d5d5d5]"></div>
        <div className=" mt-4 flex justify-center bg-[#ffffff91] rounded-md">
          <div className="w-[40px] relative flex justify-center items-center cursor-pointer h-[40px] bg-green-500 border-[2px] border-[#d5d5d5] rounded-full">
            {/* <ImageLink url="" /> */}
            <FaUserEdit className=" absolute top-[10px] left-[12px]" />
          </div>
        </div>
        <div className="  mt-5 flex gap-y-2 flex-wrap items-center justify-between ml-5">
          <InputField
            itemName="name"
            className="px-2 py-1 text-xs border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
            placeHolder="Enter Name"
          />{" "}
          <InputField
            itemName="number"
            className="px-2 py-1 border text-xs rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
            placeHolder="Enter Number"
          />{" "}
          <InputField
            itemName="relation"
            className="px-2 py-1 text-xs border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
            placeHolder="Enter relation"
          />{" "}
        </div>
        <div className=" mt-5 flex justify-end">
          <Button
            buttonName="add person"
            buttonIcon={<IoMdPersonAdd className=" text-[#ffffff]" />}
          />
        </div>
      </div>
    </div>
  );
};

export default AddPepole;
