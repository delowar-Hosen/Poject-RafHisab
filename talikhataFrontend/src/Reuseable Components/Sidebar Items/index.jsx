import React from "react";

const SidebarItem = ({ itemName, icon }) => {
  return (
    <div className=" flex  items-center">
      <button className=" flex items-center pl-1 rounded-md  w-[100%] py-2 text-sm hover:bg-[#d5d5d5]  transition-0.5s ease-linear cursor-pointer">
        <div className="mr-2">{icon}</div>
        <div className="">{itemName}</div>
      </button>
    </div>
  );
};

export default SidebarItem;
