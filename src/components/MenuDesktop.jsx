"use client";
import Link from "next/link";
import { navLinks } from "@/constants";
import { FaSortDown } from "react-icons/fa";
import { useStateContext } from "@/contexts/ContextProvider";
import { motion } from "framer-motion";
import { variantDropDown } from "@/utils/motion";
const MenuDesktop = () => {
  const { activeDropDown, setActiveDropDown } = useStateContext();
  return (
    <ul className="flex-row items-center justify-center hidden gap-8 list-none lg:flex">
      {navLinks.map((link) =>
        link.name === "pages" ? (
          <ul className="relative" key={link.id}>
            <li
              className={`flex items-start justify-center gap-1 cursor-pointer text-base font-normal text-black capitalize duration-300 ease-in-out hover:text-primary`}
              onClick={() => {
                setActiveDropDown((prev) => !prev);
              }}
            >
              {link.name}
              <FaSortDown />
            </li>

            <motion.div
              variants={variantDropDown}
              animate={activeDropDown ? "show" : "hidden"}
              className={`items-center justify-center ${
                activeDropDown ? "flex" : "hidden"
              } absolute flex-col gap-5 p-5 rounded-lg shadow-xl top-14 -left-[50%] bg-white z-50 whitespace-nowrap`}
            >
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
            </motion.div>
          </ul>
        ) : (
          <li key={link.id} onClick={() => setActiveDropDown(() => false)}>
            <Link
              href={link.name === "home" ? "/" : `/#${link.name}`}
              className="text-base font-normal text-black capitalize duration-300 ease-in-out hover:text-primary"
            >
              {link.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default MenuDesktop;
