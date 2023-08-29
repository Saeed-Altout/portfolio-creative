"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";
import { variantMenuMobile } from "@/utils/motion";
import { FaSortDown } from "react-icons/fa";

const MenuMobile = () => {
  const { setActiveMenu, setActiveDropDown, activeDropDown } =
    useStateContext();

  return (
    <motion.ul
      variants={variantMenuMobile}
      initial="hidden"
      animate="show"
      className="flex items-center justify-center absolute flex-col gap-5 p-10 rounded-lg top-[58px] lg:hidden bg-gradient-to-t shadow-lg from-[#e6f1ff] to-[#fff] w-full left-0 right-0"
    >
      {navLinks.map((link) =>
        link.name === "pages" ? (
          <ul key={link.id}>
            <li
              className={`flex items-start justify-center gap-1 cursor-pointer text-base font-normal text-black capitalize duration-300 ease-in-out hover:text-primary`}
              onClick={() => {
                setActiveDropDown((prev) => !prev);
              }}
            >
              {link.name}
              <FaSortDown />
            </li>
            {activeDropDown && (
              <div className="flex flex-col items-center justify-center gap-5 pt-5">
                {link.pageLinks.map((page) => (
                  <li
                    key={page.id}
                    onClick={() => setActiveDropDown((prev) => !prev)}
                  >
                    <Link
                      href={page.href}
                      className="text-base font-normal text-black capitalize duration-300 ease-in-out hover:text-primary"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </div>
            )}
          </ul>
        ) : (
          <li key={link.id}>
            <Link
              href={link.name === "home" ? "/" : `/#${link.name}`}
              className="text-base font-normal text-black capitalize duration-300 ease-in-out hover:text-primary"
              onClick={() => setActiveMenu((prev) => !prev)}
            >
              {link.name}
            </Link>
          </li>
        )
      )}
    </motion.ul>
  );
};

export default MenuMobile;
