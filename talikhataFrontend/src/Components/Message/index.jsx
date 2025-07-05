import React from "react";
import Title from "../../Reuseable Components/Title";
import InputField from "../../Reuseable Components/Input Field";
import AddIcon from "../../Reuseable Components/Add Option Icon";
import Button from "../../Reuseable Components/Button";
import { GrSend } from "react-icons/gr";

const Message = () => {
  return (
    <div>
      <div className=" p-4 rounded-md bg-[#0000006b]">
        <div>
          <Title title="Message" />
        </div>
        <div className=" mt-[10px] w-full h-[1px] bg-[#d5d5d5]"></div>
        <div className="  mt-[40px] flex gap-y-2 flex-wrap items-center justify-between ml-5">
          <div className=" relative w-full">
            <InputField
              itemName="Name"
              className="px-2 py-1 text-xs  border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
              placeHolder="Enter Name"
            />{" "}
            <AddIcon className=" absolute top-1 right-3" />
          </div>
          <InputField
            itemName="amount"
            className="px-2 py-1 text-xs border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
            placeHolder="Enter Due amount"
          />{" "}
          <div className=" w-full flex justify-between">
            <p className=" text-sm text-[#d5d5d5]">Message</p>

            <textarea
              placeholder="Message here"
              className=" text-xs w-[145px] p-0.5  capitalize text-[#ffffff] border-[#ffffff] rounded-md border outline-none"
            ></textarea>
          </div>
        </div>

        <div className=" mt-2 flex justify-end ">
          <Button
            buttonName="send"
            buttonIcon={<GrSend className=" text-[#ffffff]" />}
            className="text-xs font-bold capitalize"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
