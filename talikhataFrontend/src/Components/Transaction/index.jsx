import React from "react";
import Title from "../../Reuseable Components/Title";
import { FaUserEdit } from "react-icons/fa";
import InputField from "../../Reuseable Components/Input Field";
import Button from "../../Reuseable Components/Button";
import { GoFileSubmodule } from "react-icons/go";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Transaction = () => {
  return (
    <div>
      <div className=" p-4 rounded-md bg-[#0000006b]">
        <div>
          <Title title="Transaction" />
        </div>
        <div className=" mt-[15px] w-full h-[1px] bg-[#d5d5d5]"></div>

        <div className="  mt-[40px] flex gap-y-2 flex-wrap items-center justify-between ml-5">
          <InputField
            itemName="name"
            className="px-2 py-1 text-xs border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
            placeHolder="Enter Name"
          />{" "}
          <InputField
            itemName="date"
            className="px-2 py-1 border text-xs w-[162px] rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
            placeHolder="Pick A Date"
            type="date"
          />{" "}
          <div className="w-full relative flex items-center justify-between">
            <p className=" text-sm text-[#d5d5d5] w-[20%]">Category</p>
            <HiOutlineArrowLongRight className=" w-[10%] mt-1 text-[#00000080]" />
            <select className="w-[162px] border-[#ffffff86] px-2 py-1 bg-[#d5d5d5] outline-none text-xs rounded-md border">
              <option value="credit">জমা</option>
              <option value="debit">খরচ</option>
              <option value="due">বাকি</option>
            </select>
          </div>
          <InputField
            itemName="Taka"
            className="px-2 py-1  text-xs border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
            placeHolder="Enter Taka"
          />{" "}
        </div>
        <div className=" mt-5 flex justify-end">
          <Button
            buttonName="Submit"
            buttonIcon={<GoFileSubmodule className=" text-[#ffffff]" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
