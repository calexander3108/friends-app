import React, { useState } from "react";
import { Card, Filter } from "../../components/index";

const index = () => {
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenFilter = () => {
    setIsOpen(true);
  };
  const handleCloseFilter = () => {
    setIsOpen(false);
  };

  const handleCloseSelect = () => {
    setFilter("close");
  };

  const handleSuperCloseSelect = () => {
    setFilter("superclose");
  };

  const handleResetSelect = () => {
    setFilter("");
    const close = document.getElementById("close");
    const superclose = document.getElementById("superclose");
    close.checked = false;
    superclose.checked = false;
  };

  const handleMixSelect = () => {
    setFilter("mix");
  };

  return (
    <>
      <div className="flex flex-col justify-center w-[100%] sm:w-[100%] lg:w-[80%]">
        <div className="flex flex-row justify-start mb-2 sm:mb-4">
          <button
            className="text-white font-bold py-1 sm:py-2 px-[14px] sm:px-[22px] rounded-full border border-[#ABABAB] hover:border-blue-500 transition delay-25"
            onClick={handleOpenFilter}
          >
            <img
              src="/filterIcon.png"
              alt="filter"
              className="inline w-[15px] sm:w-full"
            />
          </button>
          <button
            className="text-[#D7D7D7] hover:text-blue-500 transition delay-25 font-medium ml-4 text-sm sm:text-[14px]"
            onClick={handleResetSelect}
          >
            Clear all
          </button>
        </div>
        <Filter
          isOpenProp={isOpen}
          onClose={handleCloseFilter}
          onCloseSelect={handleCloseSelect}
          onSuperSelect={handleSuperCloseSelect}
          onResetSelect={handleResetSelect}
          onMixSelect={handleMixSelect}
        />
        <Card filterProp={filter} />
      </div>
    </>
  );
};

export default index;
