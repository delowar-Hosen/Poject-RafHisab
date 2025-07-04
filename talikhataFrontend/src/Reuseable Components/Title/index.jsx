import React from "react";

const Title = ({ title, className }) => {
  return (
    <div className=" flex justify-center items-center capitalize text-sm font-bold  text-[#ffffff]">
      <h5 className={className}>{title}</h5>
    </div>
  );
};

export default Title;
