import React from "react";

const Button = ({ buttonName, className, mainClassName, buttonIcon }) => {
  return (
    <button
      className={`${mainClassName} px-2 py-1 rounded-md bg-green-500 flex cursor-pointer capitalize justify-between items-center`}
    >
      <p className={`${className} text-sm  text-[#d5d5d5] capitalize pr-5`}>
        {buttonName}
      </p>
      {buttonIcon}
    </button>
  );
};

export default Button;
