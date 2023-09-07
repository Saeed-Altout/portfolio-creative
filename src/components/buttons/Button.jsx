import { flex } from "@/app/style";
import { useStateContext } from "@/contexts/ContextProvider";
import Link from "next/link";
const Button = ({ text, icon, styles, href }) => {
  const { currentTheme } = useStateContext();
  return (
    <Link href={href}>
      <button
        style={{
          backgroundColor: currentTheme,
        }}
        className={`${styles} px-6 py-3 text-base font-medium ease-in-out duration-300 rounded-full hover:bg-opacity-80  hover:shadow-lg ${flex.center} gap-2`}
      >
        {text}
        <span>{icon}</span>
      </button>
    </Link>
  );
};

export default Button;
