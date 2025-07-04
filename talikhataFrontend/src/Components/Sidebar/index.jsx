import React from "react";
import SidebarItem from "../../Reuseable Components/Sidebar Items";
import { CiHome } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className=" w-64 px-5 py-5 bg-[#ffffff31]">
      <div className=" flex items-center justify-between">
        <div>
          <div className=" w-[40px] h-[40px] rounded-lg bg-green-500"></div>
        </div>
        <div className=" capitalize text-xs">mohhommod ariyan</div>
        <div className=" w-[40px] h-[40px] rounded-lg bg-sky-500 flex items-center justify-center">
          <CiSettings className=" text-xl" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#d5d5d5] mt-3 mb-2"></div>
      <div>
        <div className=" flex justify-center items-center">
          <h6 className=" text-xs capitalize text-[#2D3748]">ALL services</h6>
        </div>
        <div className=" mt-4 flex flex-col gap-y-1">
          <SidebarItem itemName="Dashboard" icon={<CiHome />} />
          <SidebarItem itemName="Add Customar" icon={<CiHome />} />
          <SidebarItem itemName="Transection" icon={<CiHome />} />
          <SidebarItem itemName="Sell" icon={<CiHome />} />
          <SidebarItem itemName="Buy" icon={<CiHome />} />
          <SidebarItem itemName="Stock" icon={<CiHome />} />
          <SidebarItem itemName="Cash" icon={<CiHome />} />
          <SidebarItem itemName="Message" icon={<CiHome />} />
          <SidebarItem itemName="Backup Check" icon={<CiHome />} />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#d5d5d5] mt-3 mb-2"></div>
      <div>
        <div className=" flex justify-center items-center">
          <h6 className=" text-xs capitalize text-[#2D3748]">Contact Us</h6>
        </div>
        <div className=" mt-3 flex flex-col gap-y-1 justify-center items-center">
          <button className=" text-xs capitalize cursor-pointer text-[2D3748]">
            Phone : <span className="text-[10px]">01751784455</span>
          </button>
          <button className=" text-xs capitalize  cursor-pointer text-[2D3748]">
            Email : <span className=" text-[10px]">kala@gmail.com</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
