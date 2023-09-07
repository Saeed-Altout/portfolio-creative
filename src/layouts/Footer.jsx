import Link from "next/link";
import { text } from "@/app/style";
import { Container, Logo } from "@/components";
import { footerLinks, socialMedia } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";

const Footer = () => {
  const { year, currentTheme } = useStateContext();
  return (
    <>
      <section className="relative pt-40">
        <Container>
          <div className="max-w-md mb-5">
            <Logo />
            <p className={`${text.p} mt-3`}>
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-between w-full gap-10 my-5">
            {footerLinks.map((sideLink, key) => (
              <ul key={key} className="flex flex-col gap-5 text-black">
                <li
                  className={text.h3}
                  style={{
                    color: currentTheme,
                  }}
                >
                  {sideLink.title}
                </li>
                {
                  <ul className="flex flex-col gap-5">
                    {sideLink.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.link}
                        className="text-gray-500 duration-300 ease-in-out dark:text-gray-300 dark:hover:text-white hover:text-black"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </ul>
                }
              </ul>
            ))}
          </div>

          <span className="block w-full h-[1px]  bg-gray-200 dark:bg-dark my-10" />
          <div className="container w-full h-full px-6 mx-auto text-center md:px-16">
            <p className="text-base leading-8 tracking-wide text-center text-darker dark:text-white">
              Copyright Ⓒ {year}
              <span
                className="mx-1 font-semibold"
                style={{
                  color: currentTheme,
                }}
              >
                Saeed Altout{" "}
              </span>
              All rights reserved.
            </p>
            <ul className="flex items-center justify-center gap-10 py-10">
              {socialMedia.map((icon, key) => (
                <Link
                  key={key}
                  href={icon.link}
                  className="text-2xl text-gray-500 duration-300 ease-in-out dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  {icon.icon}
                </Link>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
