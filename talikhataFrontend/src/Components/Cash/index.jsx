import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import Title from "../../Reuseable Components/Title";
import { MdInput } from "react-icons/md";
import { MdOutlineOutput } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";
import { LuHandHeart } from "react-icons/lu";
import { MdSell } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";

const Cash = () => {
  return (
    <div>
      <div className=" p-4 rounded-md bg-[#0000006b]">
        <div>
          <Title title="Cash" />
        </div>
        <div className=" mt-[10px] w-full h-[1px] bg-[#d5d5d5]"></div>

        <div className=" mt-2 ">
          <div className=" flex  items-center justify-between w-full flex-wrap gap-y-1">
            <div className=" w-[50%] text-xs text-[#ffffff] flex items-center capitalize">
              <div className=" w-[20px] h-[20px] mr-1 flex items-center justify-center bg-[#ffffff]  rounded-full">
                <MdInput className=" text-[#000000]" />
              </div>
              Cash in{" "}
              <p className=" w-[50px] justify-center flex items-center text-xs">
                1200000
              </p>
              <TbCurrencyTaka className=" text-xs" />
            </div>
            <div className=" w-[50%] text-xs text-[#ffffff] flex items-center capitalize">
              <div className=" w-[20px] h-[20px] mr-1 flex items-center justify-center bg-[#ffffff]  rounded-full">
                <MdOutlineOutput className=" text-[#000000]" />
              </div>
              <p>Cash out </p>
              <p className=" w-[50px] justify-center flex items-center text-xs">
                1200000
              </p>
              <TbCurrencyTaka className=" text-xs" />
            </div>{" "}
            <div className=" w-[50%] text-xs text-[#ffffff] flex items-center capitalize">
              <div className=" w-[20px] h-[20px] mr-1 flex items-center justify-center bg-[#ffffff]  rounded-full">
                <FaHandHoldingMedical className=" text-[#000000]" />
              </div>
              due in{" "}
              <p className=" w-[50px] justify-center flex items-center text-xs">
                1200000
              </p>
              <TbCurrencyTaka className=" text-xs" />
            </div>
            <div className=" w-[50%] text-xs text-[#ffffff] flex items-center capitalize">
              <div className=" w-[20px] h-[20px] mr-1 flex items-center justify-center bg-[#ffffff]  rounded-full">
                <LuHandHeart className=" text-[#000000]" />
              </div>
              <p>new due</p>
              <p className=" w-[50px] justify-center flex items-center text-xs">
                1200000
              </p>
              <TbCurrencyTaka className=" text-xs" />
            </div>
          </div>
        </div>
        <div className=" mt-[10px] w-full h-[1px] bg-[#d5d5d5]"></div>
        <div className=" mt-2 ">
          <div className=" flex  items-center justify-between w-full flex-wrap gap-y-1">
            <div className=" w-[50%] text-xs text-[#ffffff] flex items-center capitalize">
              <div className=" w-[20px] h-[20px] mr-1 flex items-center justify-center bg-[#ffffff]  rounded-full">
                <MdSell className=" text-[#000000]" />
              </div>
              today sell{" "}
              <p className=" w-[50px] justify-center flex items-center text-xs">
                1200000
              </p>
              <TbCurrencyTaka className=" text-xs" />
            </div>
            <div className=" w-[50%] text-xs text-[#ffffff] flex items-center capitalize">
              <div className=" w-[20px] h-[20px] mr-1 flex items-center justify-center bg-[#ffffff]  rounded-full">
                <IoBagAddOutline className=" text-[#000000]" />
              </div>
              <p>today buy </p>
              <p className=" w-[50px] justify-center flex items-center text-xs">
                1200000
              </p>
              <TbCurrencyTaka className=" text-xs" />
            </div>{" "}
            <div className=" w-[50%] text-xs text-[#ffffff] flex items-center capitalize">
              <div className=" w-[20px] h-[20px] mr-1 flex items-center justify-center bg-[#ffffff]  rounded-full">
                <IoBagAddOutline className=" text-[#000000]" />
              </div>
              <p>cash sell </p>
              <p className=" w-[50px] justify-center flex items-center text-xs">
                1200000
              </p>
              <TbCurrencyTaka className=" text-xs" />
            </div>{" "}
            <div className=" w-[50%] text-xs text-[#ffffff] flex items-center capitalize">
              <div className=" w-[20px] h-[20px] mr-1 flex items-center justify-center bg-[#ffffff]  rounded-full">
                <IoBagAddOutline className=" text-[#000000]" />
              </div>
              <p>due sell </p>
              <p className=" w-[50px] justify-center flex items-center text-xs">
                1200000
              </p>
              <TbCurrencyTaka className=" text-xs" />
            </div>{" "}
          </div>
        </div>
        <div className=" mt-[10px] w-full h-[1px] bg-[#d5d5d5]"></div>
        <div className=" mt-[14px] ">
          <div className=" flex  items-end w-full flex-col gap-y-1">
            <div className=" w-[50%] text-xs text-[#ffffff] flex items-center justify-between capitalize">
              <div className=" w-[20px] h-[20px] mr-1 flex items-center justify-center bg-[#ffffff]  rounded-full">
                <MdSell className=" text-[#000000]" />
              </div>
              <p className=" text-[10px] underline">today expense</p>{" "}
              <p className=" w-[50px] justify-center flex items-center text-[10px]">
                1200000
              </p>
              <TbCurrencyTaka className=" text-xs" />
            </div>
            <div className=" w-[50%] text-xs text-[#ffffff] flex items-center justify-between capitalize">
              <div className=" w-[20px] h-[20px] mr-1 flex items-center justify-center bg-[#ffffff]  rounded-full">
                <IoBagAddOutline className=" text-[#000000]" />
              </div>
              <p className=" text-[10px] underline">net cash </p>
              <p className=" w-[50px] justify-center flex items-center text-[10px]">
                1200000
              </p>
              <TbCurrencyTaka className=" text-xs" />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cash;
