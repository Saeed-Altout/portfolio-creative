import { useStateContext } from "@/contexts/ContextProvider";

const BlackLayer = () => {
  const { setSettings, settings } = useStateContext();
  return (
    <>
      {settings && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#0009] z-[500]"
          onClick={() => {
            setSettings(false);
          }}
        />
      )}
    </>
  );
};

export default BlackLayer;
