import React from "react";
import ImageLink from "../../Reuseable Components/Link Image";
import logo from "../../assets/logo2.png";
import SearchBar from "../../Reuseable Components/Search Bar";
import { IoMdPersonAdd } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiStickyNote } from "react-icons/ci";
import { RiStockFill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { PiBellLight } from "react-icons/pi";
import { CiInboxIn } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { MdOutlineSell } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { LuMoon } from "react-icons/lu";
import WaterBackground from "../../Reuseable Components/Water Background";
import HoverCircleButton from "../../Reuseable Components/Hover Effect";
import { CiLogin } from "react-icons/ci";
import MenuItems from "../../Reuseable Components/Menu Items";

const Navbar = () => {
  return (
    <div className=" w-full  ">
      <div className=" h-16 flex items-center justify-between bg-[#d5d5d5] text-[#2D3748]">
        <div className="w-[10%] ">
          <ImageLink url={logo} />
        </div>
        <div className=" w-[15%] flex justify-center ">
          <SearchBar
            className=" w-[205px] py-2 px-2 appearance-none outline-none text-[#2D3748] rounded-md border text-xs shadow-2xl bg-[#ffffff] placeholder:text-[#FF0000]"
            placHolder="Use Me For Finding"
          />
        </div>
        <div className=" w-[55%] flex items-center justify-between">
          <HoverCircleButton>
            <div className=" flex items-center py-1 px-1">
              <p className=" text-xs">Add</p>
              <IoIosArrowRoundForward />
              <IoMdPersonAdd />
            </div>
          </HoverCircleButton>
          <HoverCircleButton>
            <div className=" flex items-center py-1 px-1">
              <p className=" text-xs">Note</p>
              <IoIosArrowRoundForward />
              <CiStickyNote className=" text-[#2563EB]" />
            </div>
          </HoverCircleButton>
          <HoverCircleButton>
            <div className=" flex items-center py-1 px-1">
              <p className=" text-xs">Stock</p>
              <IoIosArrowRoundForward />
              <RiStockFill />
            </div>
          </HoverCircleButton>
          <HoverCircleButton>
            <div className=" flex items-center py-1 px-1">
              <p className=" text-xs">Transaction</p>
              <IoIosArrowRoundForward />
              <GrTransaction />
            </div>{" "}
          </HoverCircleButton>
          <HoverCircleButton>
            <div className=" flex items-center py-1 px-1">
              <p className=" text-xs">Knock</p>
              <IoIosArrowRoundForward />
              <PiBellLight />
            </div>
          </HoverCircleButton>
          <HoverCircleButton>
            <div className=" flex items-center py-1 px-1">
              <p className=" text-xs">Cash</p>
              <IoIosArrowRoundForward />
              <CiInboxIn />
            </div>
          </HoverCircleButton>
          <HoverCircleButton>
            <div className=" flex items-center py-1 px-1">
              <p className=" text-xs">Backup</p>
              <IoIosArrowRoundForward />
              <CiBookmarkCheck />
            </div>{" "}
          </HoverCircleButton>
          {/* <HoverCircleButton>
              <div className=" flex items-center py-1 px-1">
                <p className=" text-xs">Wallet</p>
                <IoIosArrowRoundForward />
                <CiWallet />
              </div>
            </HoverCircleButton> */}
          <HoverCircleButton>
            <MenuItems
              name="Sell"
              icon={<MdOutlineSell />}
              divider={<IoIosArrowRoundForward />}
            />
          </HoverCircleButton>
          <HoverCircleButton>
            <MenuItems
              name="Buy"
              icon={<IoIosAdd />}
              divider={<IoIosArrowRoundForward />}
            />
          </HoverCircleButton>
        </div>
        <div className=" w-[15%] cursor-pointer flex items-center justify-between">
          <div>
            <div className=" bg-[#ffffff] mr-1 w-[30px] h-[30px] flex justify-center items-center  rounded-full">
              <LuMoon className=" text-[#d5d5d5]" />
            </div>
          </div>
          <div className=" flex items-center justify-between  w-full px-1  rounded-md">
            <p className=" text-xs">Mohhammod Ariyan</p>
            <div className=" h-[30px] w-[35px] rounded-full bg-[#ffffff] flex justify-center items-center">
              <CiLogin className="text-2xl text-[#2D3748]  cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
