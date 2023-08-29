import { useStateContext } from "@/contexts/ContextProvider";
import React from "react";
import { FiSettings } from "react-icons/fi";

const ButtonSettings = () => {
  const { scrolled, setActiveMenu } = useStateContext();

  return (
    <>
      {scrolled && (
        <div
          onClick={() => setActiveMenu((prev) => !prev)}
          className="fixed p-5 bg-darkestSd md:hidden rounded-md cursor-pointer shadow-2xl right-0 z-[1000] bottom-20"
        >
          <FiSettings className="text-2xl text-white" />
        </div>
      )}
    </>
  );
};

export default ButtonSettings;
