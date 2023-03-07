import React, { useEffect, useState } from "react";

const Filter = ({
  isOpenProp,
  onClose,
  onCloseSelect,
  onSuperSelect,
  onResetSelect,
  onMixSelect,
}) => {
  let [isOpen, setIsOpen] = useState(isOpenProp);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  const handleSubmit = () => {
    const close = document.getElementById("close");
    const superclose = document.getElementById("superclose");
    if (close.checked && superclose.checked) {
      onMixSelect();
    } else if (superclose.checked) {
      onSuperSelect();
    } else if (close.checked) {
      onCloseSelect();
    } else {
      onResetSelect();
    }
    handleClose();
  };

  const handleReset = () => {
    onResetSelect();
    handleClose();
  };

  return (
    <div
      className={`w-[250px] sm:w-[320px] h-auto z-10 absolute top-[140px] sm:top-[190px] lg:top-[210px] bg-white rounded-md shadow-md ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between border-b p-3">
        <button
          className="text-blue-500 text-[14px] font-medium ml-1 py-2"
          onClick={handleReset}
        >
          Clear all
        </button>
        <button className="flex-grow text-[#424242] text-[14px] font-medium mx-4">
          Filter
        </button>
        <button className="text-[#424242] text-[14px] font-medium mx-4">
          <img
            src="/cross.png"
            alt="cross"
            className="inline w-[17px]"
            onClick={handleClose}
          />
        </button>
      </div>
      <div className="flex flex-row justify-start p-4">
        <span className="text-[14px] text-[#686868]">Friend Status</span>
      </div>
      <div className="flex flex-row justify-between items-center px-4 font-medium">
        <span>Close Friends</span>
        <span>
          <input
            type="checkbox"
            className="m-4 cursor-pointer"
            name="close"
            id="close"
            value="close"
          />
        </span>
      </div>
      <div className="flex flex-row justify-between items-center px-4 font-medium">
        <span>Super Close Friends</span>
        <span>
          <input
            type="checkbox"
            className="m-4 cursor-pointer"
            name="superclose"
            id="superclose"
            value="superclose"
          />
        </span>
      </div>
      <div className="flex flex-row justify-center items-center px-2">
        <button
          className="bg-gray-600 w-full p-3 font-medium text-white rounded-md mt-6 mb-3"
          type="button"
          onClick={handleSubmit}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
