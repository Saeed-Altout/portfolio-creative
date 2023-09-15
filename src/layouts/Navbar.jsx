"use client";
import { Logo, Menu, Toggle } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";
const Navbar = () => {
  const { activeMenu, scrolled } = useStateContext();
  return (
    <nav
      className={`bg-white w-full fixed z-[1000] py-6 ${
        scrolled && "shadow-xl"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo />
        <Menu isMobile={false} />
        <Toggle />
        {activeMenu && <Menu isMobile={true} />}
      </div>
    </nav>
  );
};

export default Navbar;
