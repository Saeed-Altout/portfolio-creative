import { FiMenu, FiX } from "react-icons/fi";
import { useStateContext } from "@/contexts/ContextProvider";
const Toggle = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <button
      type="button"
      className="block ml-auto text-3xl cursor-pointer w-fit md:hidden"
      onClick={() => {
        setActiveMenu((prev) => !prev);
      }}
    >
      {activeMenu ? <FiX /> : <FiMenu />}
    </button>
  );
};

export default Toggle;
