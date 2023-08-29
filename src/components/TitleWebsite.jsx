import React from "react";
import { motion } from "framer-motion";
import { useStateContext } from "@/contexts/ContextProvider";
import { variantTitleWebsite } from "@/utils/motion";
const TitleWebsite = () => {
  const { scrolled, year } = useStateContext();
  return (
    <motion.div
      variants={variantTitleWebsite}
      initial="hidden"
      animate={scrolled ? "show" : "hidden"}
      className="fixed z-50 block w-full py-5 min-h-[68px] text-lg text-center text-black bg-white"
    >
      Portfolio Saeed Altout - {year}
    </motion.div>
  );
};

export default TitleWebsite;
