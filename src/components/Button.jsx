import Link from "next/link";
const Button = ({ text, icon, styles, href }) => {
  return (
    <Link
      href={href}
      className={`${styles}  text-white bg-primary px-8 py-3 transition rounded-full hover:bg-hoverPrimary  hover:shadow-lg flex justify-center w-fit items-center gap-2`}
    >
      {text}
      <span>{icon}</span>
    </Link>
  );
};

export default Button;
