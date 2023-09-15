import Link from "next/link";
import { motion } from "framer-motion";
import { variantMenuMobile } from "@/utils/motion";
import { navLinks } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";

const Menu = ({ isMobile }) => {
  const { setActiveMenu } = useStateContext();
  return (
    <motion.ul
      variants={variantMenuMobile}
      initial={isMobile ? "hidden" : "show"}
      animate="show"
      className={`${
        isMobile
          ? `gap-10 bg-white absolute flex-col p-10 top-[80px] flex md:hidden shadow-xl w-full left-0 right-0`
          : `hidden md:flex gap-8`
      } items-center justify-between `}
    >
      {navLinks.map((link, key) => (
        <li
          key={key}
          onClick={() => {
            setActiveMenu(false);
          }}
        >
          <Link
            href={link.href}
            className="capitalize transition hover:text-primary"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default Menu;
