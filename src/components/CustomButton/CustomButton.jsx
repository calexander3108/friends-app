import React from "react";

const CustomButton = ({ bgColor, textColor, text }) => {
  return (
    <button
      className={`rounded-2xl border ${bgColor} px-3 py-1 mx-3 text-xs font-semibold`}
    >
      <span className={`${textColor} text-[12px] font-medium`}>
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
