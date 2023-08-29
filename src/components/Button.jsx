import Link from "next/link";
const Button = ({ text, icon, styles, href, color }) => {
  return (
    <Link href={href}>
      <button
        style={{
          backgroundColor: color,
        }}
        className={`${styles} px-8 py-3 text-base font-medium ease-in-out duration-300 rounded-full hover:bg-opacity-80  hover:shadow-lg flex items-center justify-center gap-2`}
      >
        {text}
        <span>{icon}</span>
      </button>
    </Link>
  );
};

export default Button;
