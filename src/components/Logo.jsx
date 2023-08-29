import Link from "next/link";

const Logo = () => (
  <Link href={"/"} className="flex items-center justify-center gap-2">
    <span
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="flex items-center justify-center w-10 h-10 text-2xl font-bold text-white rounded-full bg-primary"
    >
      S
    </span>
    <p className="text-xl font-semibold">Saeed</p>
  </Link>
);

export default Logo;
