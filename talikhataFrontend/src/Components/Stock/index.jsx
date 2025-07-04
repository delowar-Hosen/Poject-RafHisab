import React from "react";
import Title from "../../Reuseable Components/Title";
import InputField from "../../Reuseable Components/Input Field";
import Button from "../../Reuseable Components/Button";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { GoFileSubmodule } from "react-icons/go";
import ListViewHeader from "../../Reuseable Components/List View";
import ListViewItem from "../../Reuseable Components/List View/List View Item";

const Stock = () => {
  return (
    <div>
      <div className=" w-full  p-4 rounded-md bg-[#0000006b]">
        <div>
          <Title title="stock" />
        </div>
        <div className=" mt-[15px] w-full h-[1px] bg-[#d5d5d5]"></div>

        <div className="mt-[15px]">
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
            <ListViewItem />
            <ListViewItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
