"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import { variantMenuMobile } from "@/utils/motion";
import { navLinks } from "@/constants";
import { tag } from "@/app/style";

import { useStateContext } from "@/contexts/ContextProvider";
import { FiSettings } from "react-icons/fi";

const Menu = ({ isMobile }) => {
  const { setActiveMenu, setSettings } = useStateContext();
  return (
    <motion.ul
      variants={variantMenuMobile}
      initial="hidden"
      animate="show"
      className={`${
        isMobile
          ? `dark:bg-dark gap-5 bg-white absolute flex-col p-10 top-[80px] flex lg:hidden shadow-xl w-full left-0 right-0`
          : `hidden lg:flex gap-8`
      } items-center justify-between `}
    >
      {navLinks.map((link, key) => (
        <li
          key={key}
          onClick={() => {
            setActiveMenu(false);
          }}
        >
          <Link href={link.href} className={tag.a}>
            {link.icon}
          </Link>
        </li>
      ))}
      <button
        type="button"
        className={`${tag.a} animate-spin`}
        onClick={() => {
          setActiveMenu(false);
          setSettings((prev) => !prev);
        }}
      >
        <FiSettings />
      </button>
    </motion.ul>
  );
};

export default Menu;
