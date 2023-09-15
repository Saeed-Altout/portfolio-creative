import Link from "next/link";
import { Logo } from "@/components";
import { footerLinks, socialMedia } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";

const Footer = () => {
  const { year } = useStateContext();
  return (
    <div className="relative pt-40">
      <div className="container">
        <div className="max-w-md mb-5">
          <Logo />
          <p className="mt-4">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-between w-full gap-10 my-5">
          {footerLinks.map((sideLink, key) => (
            <ul key={key} className="flex flex-col gap-5">
              <h3 className="text-2xl font-medium text-primary">
                {sideLink.title}
              </h3>
              {
                <ul className="flex flex-col gap-5">
                  {sideLink.links.map((link, key) => (
                    <Link
                      key={key}
                      href={link.link}
                      className="transition hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </ul>
              }
            </ul>
          ))}
        </div>

        <span className="block w-full h-[1px] bg-primary  my-10" />

        <p className="text-center">
          Copyright Ⓒ {year}
          <span className="mx-1 text-primary">Saeed Altout </span>
          All rights reserved.
        </p>

        <ul className="flex items-center justify-center gap-10 py-10">
          {socialMedia.map((icon, key) => (
            <Link
              key={key}
              href={icon.link}
              className="text-2xl transition hover:text-primary"
            >
              {icon.icon}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
