import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const InputField = ({
  className,
  placeHolder,
  itemName,
  type,
  mainClassName,
  itemClassName,
  arrow,
}) => {
  return (
    <div
      className={`${mainClassName} flex items-center justify-between w-full`}
    >
      <p
        className={`${itemClassName} w-[20%] capitalize text-sm text-[#d5d5d5]`}
      >
        {itemName}
      </p>
      {arrow == "y" ? (
        ""
      ) : (
        <HiOutlineArrowLongRight className=" w-[10%] mt-1 text-[#00000080]" />
      )}

      <input type={type} className={className} placeholder={placeHolder} />
    </div>
  );
};

export default InputField;
