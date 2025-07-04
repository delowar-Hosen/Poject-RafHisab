import React from "react";
import Button from "../../Reuseable Components/Button";
import InputField from "../../Reuseable Components/Input Field";
import Title from "../../Reuseable Components/Title";
import AddIcon from "../../Reuseable Components/Add Option Icon";
import { CiShoppingCart } from "react-icons/ci";
import ListViewHeader from "../../Reuseable Components/List View";
import ListViewItem from "../../Reuseable Components/List View/List View Item";
import { IoArrowBackCircle } from "react-icons/io5";

const Preview = () => {
  return (
    <div>
      <div className="p-4 rounded-md bg-[#0000006b]">
        <div>
          <Title title="preview" />
        </div>
        <div className=" mt-[15px] w-full h-[1px] bg-[#d5d5d5]"></div>
        <div className=" mt-[16px]">
          <ListViewHeader />
          <div>
            <ListViewItem />
            <ListViewItem />
            <ListViewItem />
            <ListViewItem />
            <ListViewItem />
            <ListViewItem />
            <ListViewItem />
            <ListViewItem />
          </div>
        </div>
        <div className="  mt-2 flex justify-end ">
          <div className=" relative w-full ">
            <InputField
              itemName="name"
              arrow="y"
              className="px-2 w-[100px] py-1 text-xs  border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
              placeHolder="name"
              itemClassName="pl-16"
            />{" "}
            <AddIcon className=" absolute top-[3px] right-3" />
          </div>
          <div>
            <InputField
              className="px-2 py-1 w-[100px] text-xs  justify-end  border rounded-md outline-none border-[#ffffff91] bg-[#d5d5d5]"
              placeHolder="Total Taka"
              itemClassName="pl-2"
            />{" "}
          </div>
        </div>

        <div className=" flex justify-between relative">
          <Button
            buttonName="Back"
            buttonIcon={<IoArrowBackCircle className=" text-[#ffffff]" />}
            className="text-xs"
            mainClassName=" justify-center mt-2"
          />{" "}
          <Button
            buttonName="add to cart"
            buttonIcon={<CiShoppingCart className=" text-[#ffffff]" />}
            mainClassName=" justify-center mt-2"
            className="text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;
