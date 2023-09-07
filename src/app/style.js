const flex = {
  center: "flex justify-center items-center",
  start: "flex justify-start items-start",
  end: "flex justify-end items-end",
  between: "flex justify-between items-center",
};
const tag = {
  section: "py-40 w-full h-full relative",
  container: "px-6 container mx-auto",
  button: "text-base font-medium py-3 px-12 rounded-full",
  a: "text-lg font-normal text-black capitalize duration-300 ease-in-out dark:text-white ",
};
const text = {
  p: "text-black font-normal tracking-wider text-base leading-8 dark:text-white",
  h1: "font-bold text-4xl tracking-wide dark:text-white",
  h2: "font-semibold text-3xl tracking-wide dark:text-white",
  h3: "font-bold text-2xl tracking-wide dark:text-white",
  h4: "font-bold text-xl tracking-wide dark:text-white",
  h5: "font-semibold text-lg tracking-wide dark:text-white",
  h6: "font-normal text-md tracking-wide dark:text-white",

  titleHero:
    "font-black capitalize text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center text-black dark:text-white",
  subTitleHero:
    "text-gray-500 tracking-wider text-base sm:text-lg leading-8 text-center dark:text-white",

  headSection: "text-4xl text-center font-semibold dark:text-white capitalize",
  subHeadSection:
    "text-gray-500  tracking-wider text-base sm:text-lg leading-8 text-center mt-3 dark:text-white",
};

export { flex, tag, text };
