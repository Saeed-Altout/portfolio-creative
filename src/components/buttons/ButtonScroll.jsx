import { flex } from "@/app/style";
import { motion } from "framer-motion";
import Link from "next/link";
const ButtonScroll = ({ href }) => {
  return (
    <div className={`absolute ${flex.center} w-full bottom-10`}>
      <Link href={href}>
        <div
          className={`${flex.center} h-20 p-2 border-2 w-10 rounded-full border-darker dark:border-white`}
        >
          <motion.div
            animate={{
              y: [0, 25, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-darker dark:bg-white"
          />
        </div>
      </Link>
    </div>
  );
};

export default ButtonScroll;
