"use client";
import { flex } from "@/app/style";
import { Menu, Logo, Toggle, Container } from "../index";
import { useStateContext } from "@/contexts/ContextProvider";
const Navbar = () => {
  const { activeMenu, scrolled } = useStateContext();
  return (
    <nav
      className={`ease-in-out dark:bg-dark bg-white duration-300 w-full fixed top-0 z-[1000] py-6 ${
        scrolled && "shadow-xl"
      }`}
    >
      <Container styles={flex.between}>
        <Logo />
        <Menu isMobile={false} />
        <Toggle />
        {activeMenu && <Menu isMobile={true} />}
      </Container>
    </nav>
  );
};

export default Navbar;
