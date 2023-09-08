"use client";
import { flex } from "@/app/style";
import { useStateContext } from "@/contexts/ContextProvider";
const Categories = () => {
  const { currentTheme, category, setCategory } = useStateContext();
  return (
    <div className={`${flex.center} gap-8 mt-20`}>
      {["all", "web", "mobile"].map((catego, key) => (
        <button
          key={key}
          type="button"
          className={`px-6 py-2 rounded-lg text-black dark:text-white capitalize duration-300 ease-in-out block w-fit`}
          onClick={() => setCategory(catego)}
          style={{
            backgroundColor: catego == category && currentTheme,
            color: catego == category && "#fff",
          }}
        >
          {catego}
        </button>
      ))}
    </div>
  );
};

export default Categories;
