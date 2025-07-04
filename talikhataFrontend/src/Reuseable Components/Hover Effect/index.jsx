import React from "react";

const HoverCircleButton = ({ children }) => {
  return (
    <button className="relative group group px-1 py-1 cursor-pointer bg-white text-gray-800 font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Button content */}
      <span className="relative z-10 group-hover:text-[#FF0000] ">
        {children}
      </span>
    </button>
  );
};

export default HoverCircleButton;
