"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import { Logo, MenuDesktop, MenuMobile, Toggle, Wrapper } from "./index";

const Navbar = () => {
  const { activeMenu, scrolled } = useStateContext();

  return (
    <nav
      className={`ease-in-out min-h-[80px]  bg-white duration-300 w-full py-5 fixed top-0 z-50 ${
        scrolled ? "shadow-lg " : "shadow-sm"
      }`}
    >
      <Wrapper styles="flex items-center justify-between">
        <Logo />
        <MenuDesktop />
        <Toggle />
        {activeMenu && <MenuMobile />}
      </Wrapper>
    </nav>
  );
};

export default Navbar;
