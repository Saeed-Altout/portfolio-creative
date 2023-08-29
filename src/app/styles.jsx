const flex = {
  centerCenter: "flex items-center justify-center",
  centerStart: "flex items-center justify-start",
  centerBetween: "flex items-center justify-between",
  startStart: "flex items-start justify-start",
  startCenter: "flex items-start justify-center",
};

const wrapper = {
  section: ` px-6 md:px-12 w-full h-full mx-auto container relative`,
  navbar: `px-6 md:px-12 w-full h-full mx-auto container relative ${flex.centerBetween}`,
};
const padding = {
  all: "sm:px-16 px-6 sm:py-16 py-10",
  x: "sm:px-16 px-6 xl:px-32",
  y: "sm:py-16 py-6",
};

const text = {
  text: "text-sm leading-8 md:text-base lg:text-lg text-gray",
  heroHead: "font-bold text-4xl md:text-5xl lg:text-7xl text-white",
  heroSub: "text-[#dfd9ff] font-medium text-base md:text-lg lg:text-xl mt-2",
  sectionHead:
    "text-center pt-1 text-4xl font-black text-white md:text-5xl lg:text-6xl",
  sectionSub:
    "text-center text-base font-medium capitalize lg:text-xl text-fav",
};

const component = {
  navbar: `w-full py-5 fixed top-0 z-50`,
  navbarWrapper: `${flex.centerBetween} w-full mx-auto container`,
  liNavbar: "text-base font-normal text-black capitalize",
  ulDesktop: `flex-row items-center justify-center hidden gap-8 list-none lg:flex`,
  ulMobile: ` absolute right-0 flex flex-col items-center justify-center gap-5 p-5 list-none rounded-lg black-gradient top-16 lg:hidden`,
};

const gradient = {
  Sd: "bg-gradient-to-t from-[#e6f1ff] to-[#fff]",
  sdNav: "bg-gradient-to-b from-[#e6f1ff] to-[#fff]",
  sdProgress: "bg-gradient-to-r from-[#e6f1ff] to-[#5b03e4]",
};

const transition = {
  normal: "ease-in-out duration-300",
};

const cards = {
  service: `max-w-md lg:max-w-sm p-10 text-center ${transition.normal} bg-white shadow-lg rounded-lg hover:shadow-xl`,
  project: `max-w-md lg:max-w-sm ${transition.normal} bg-white shadow-lg rounded-lg hover:shadow-xl overflow-hidden`,
};
export { wrapper, transition, flex, padding, text, component, gradient, cards };
