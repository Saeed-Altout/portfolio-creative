"use client";
import { FiMenu, FiX } from "react-icons/fi";
import { useStateContext } from "@/contexts/ContextProvider";
const Toggle = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <button
      type="button"
      className="block cursor-pointer w-fit lg:hidden"
      onClick={() => setActiveMenu((prev) => !prev)}
    >
      {activeMenu ? (
        <FiX className="object-contain text-2xl text-black" />
      ) : (
        <FiMenu className="object-contain text-2xl text-black" />
      )}
    </button>
  );
};

export default Toggle;
