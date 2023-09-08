"use client";
import { FiMenu, FiX } from "react-icons/fi";
import { useStateContext } from "@/contexts/ContextProvider";
const Toggle = () => {
  const { activeMenu, setActiveMenu, currentTheme, setSettings } =
    useStateContext();
  return (
    <button
      type="button"
      className="block ml-auto cursor-pointer w-fit lg:hidden"
      onClick={() => {
        setSettings(false);
        setActiveMenu((prev) => !prev);
      }}
    >
      {activeMenu ? (
        <FiX
          className="text-3xl text-black dark:text-white"
          style={{
            color: currentTheme,
          }}
        />
      ) : (
        <FiMenu
          className="text-3xl text-black dark:text-white"
          style={{
            color: currentTheme,
          }}
        />
      )}
    </button>
  );
};

export default Toggle;
