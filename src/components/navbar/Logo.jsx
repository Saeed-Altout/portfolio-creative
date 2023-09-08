import Link from "next/link";
import { flex } from "@/app/style";
import { useStateContext } from "@/contexts/ContextProvider";

const Logo = () => {
  const { currentTheme } = useStateContext();
  return (
    <Link
      href="/"
      style={{
        backgroundColor: currentTheme,
      }}
      className={`${flex.center} w-8 h-8 text-xl font-bold text-white rounded-full`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      S
    </Link>
  );
};

export default Logo;
