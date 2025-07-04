import React from "react";

const ListViewHeader = () => {
  return (
    <div>
      <div className="flex text-xs bg-green-500 px-1 w-full text-[#ffffff] capitalize font-bold  justify-between">
        <p>Name</p>
        <p>amount</p>
        <p>price</p>
        <p>discount</p>
      </div>
    </div>
  );
};

export default ListViewHeader;
