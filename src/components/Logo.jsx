import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center w-8 h-8 text-xl font-bold text-white transition rounded-full bg-primary hover:animate-spin"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      S
    </Link>
  );
};

export default Logo;
