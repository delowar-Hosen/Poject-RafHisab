import React from "react";
import Title from "../../Reuseable Components/Title";
import { FaGoogleDrive } from "react-icons/fa";
import Button from "../../Reuseable Components/Button";
import { FaSave } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { RiChatHistoryFill } from "react-icons/ri";
import { BiSolidSearch } from "react-icons/bi";
import InputField from "../../Reuseable Components/Input Field";
import { FaFilePdf } from "react-icons/fa";

const BackupCheck = () => {
  return (
    <div>
      <div className=" p-4 rounded-md bg-[#0000006b]">
        <div>
          <Title title="backup" />
        </div>
        <div className=" mt-[10px] w-full h-[1px] bg-[#d5d5d5]"></div>
        <div className="  mt-[20px] flex gap-y-2 flex-wrap items-center justify-between ml-5">
          <div className=" w-full flex justify-between items-center">
            <p className=" flex justify-between text-base items-center capitalize text-[#d5d5d5]">
              <FaGoogleDrive className=" mr-2" />
              google drive
            </p>
            <p className=" text-[10px] capitalize text-[#ffffff] flex items-center ">
              last updated : <span>10/5/25,10.40</span>
            </p>
            <Button
              buttonIcon={<FaSave className=" text-[#ffffff]" />}
              className="text-[10px] font-bold capitalize"
            />
          </div>
          <div className=" w-full flex justify-between items-center">
            <p className=" flex justify-between text-base items-center capitalize text-[#d5d5d5]">
              <GoFileDirectoryFill className=" mr-2" />
              use phone
            </p>
            <p className=" text-[10px] capitalize text-[#ffffff] flex items-center ">
              last updated : <span>10/5/25,10.40</span>
            </p>
            <Button
              buttonIcon={<FaSave className=" text-[#ffffff]" />}
              className="text-[10px] font-bold capitalize"
            />
          </div>
          <div className=" w-full flex justify-between items-center">
            <p className=" flex justify-between text-base items-center capitalize text-[#d5d5d5]">
              <RiChatHistoryFill className=" mr-2" />
              history
            </p>
            <InputField
              arrow="y"
              className="px-2 py-1  capitalize text-xs border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
              placeHolder="enter date"
            />{" "}
            <Button
              buttonIcon={<BiSolidSearch className=" text-[#ffffff]" />}
              className="text-[10px] font-bold capitalize "
              mainClassName="ml-2"
            />
          </div>
          <div className=" w-full flex justify-between items-center">
            <p className=" flex justify-between text-base items-center capitalize text-[#d5d5d5]">
              <FaFilePdf className=" mr-2" />
              pdf
            </p>
            <InputField
              arrow="y"
              className="px-2 py-1  capitalize text-xs border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
              placeHolder="enter date"
            />{" "}
            <Button
              buttonIcon={<BiSolidSearch className=" text-[#ffffff]" />}
              className="text-[10px] font-bold capitalize "
              mainClassName="ml-2"
            />
          </div>
        </div>
        <div className=" flex justify-center items-center mt-[22px]">
          <p className=" text-sm capitalize text-[#ffffff]  font-bold">
            please choose for backup avobe any option
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackupCheck;
