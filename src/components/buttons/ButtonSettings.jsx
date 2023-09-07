import { text } from "@/app/style";
import { colorsTheme } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";
import { FaMoon, FaSun } from "react-icons/fa";
const ButtonSettings = () => {
  const { settings, setSettings, setCurrentTheme, setMode } = useStateContext();
  return (
    <>
      {settings && (
        <div className="fixed w-80 px-10 pt-5 right-0 top-[80px] h-screen bg-white dark:bg-dark shadow-xl z-[2000] duration-300 ease-in-out">
          <p className={`${text.h5} py-4`}>Theme:</p>
          <div className="flex flex-wrap gap-5">
            {colorsTheme.map((color) => (
              <div
                className="w-8 h-8 rounded-lg cursor-pointer"
                style={{
                  backgroundColor: color,
                }}
                onClick={() => {
                  setCurrentTheme(color);
                  setSettings(false);
                }}
              />
            ))}
          </div>
          <p className={`${text.h5} py-4`}>Mode:</p>
          <div className="flex flex-col gap-5">
            <div
              className="flex items-center justify-start gap-2 cursor-pointer w-fit text-dark dark:text-white"
              onClick={() => setMode("light")}
            >
              <FaSun /> Light
            </div>
            <div
              className="flex items-center justify-start gap-2 cursor-pointer w-fit text-dark dark:text-white"
              onClick={() => setMode("dark")}
            >
              <FaMoon /> Dark
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonSettings;
