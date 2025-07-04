import React from "react";

const ListViewItem = () => {
  return (
    <div>
      <div className=" flex px-1 bg-red-500  items-center justify-between">
        <p className=" text-[10px] text-[#d5d5d5] font-normal capitalize">
          rosun
        </p>
        <p className=" text-[10px] text-[#d5d5d5] font-normal capitalize">
          10<span>kg</span>
        </p>
        <p className=" text-[10px] text-[#d5d5d5] font-normal capitalize">
          1200 <span>taka</span>
        </p>
        <p className=" text-[10px] text-[#d5d5d5] font-normal capitalize">
          10 <span>taka</span>
        </p>
      </div>
    </div>
  );
};

export default ListViewItem;
