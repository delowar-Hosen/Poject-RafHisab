import React from "react";

const MenuItems = ({ name, icon, divider }) => {
  return (
    <div className=" flex items-center py-1 px-1">
      <p className=" text-xs">{name}</p>
      {divider}
      {icon}
    </div>
  );
};

export default MenuItems;
