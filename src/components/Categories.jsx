import { useStateContext } from "@/contexts/ContextProvider";
const Categories = () => {
  const { category, setCategory } = useStateContext();
  return (
    <div className={`flex justify-center items-center gap-8 mt-20`}>
      {["all", "web", "mobile"].map((catego, key) => (
        <button
          key={key}
          type="button"
          className={`px-6 py-2 rounded-lg text-black capitalize transition block w-fit`}
          onClick={() => setCategory(catego)}
          style={{
            backgroundColor: catego == category && "#000",
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
