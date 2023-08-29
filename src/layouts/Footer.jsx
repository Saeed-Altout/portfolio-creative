import { flex, text } from "@/app/styles";
import { Logo, Wrapper } from "@/components";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const nowYear = new Date();
  return (
    <>
      <section className="relative pt-40">
        <Wrapper styles="flex items-start justify-between flex-col gap-10">
          <div className="max-w-md">
            <span className="block mr-auto w-fit">
              <Logo />
            </span>
            <p className="pt-2 text-base text-black">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-between w-full gap-10">
            {footerLinks.map((sideLink, index) => (
              <ul key={index} className="flex flex-col gap-5 text-black">
                <li className="text-2xl font-semibold text-primary">
                  {sideLink.title}
                </li>
                {
                  <ul className="flex flex-col gap-5">
                    {sideLink.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.link}
                        className="text-black duration-300 ease-in-out hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </ul>
                }
              </ul>
            ))}
          </div>

          <span className="block w-full h-[1px]  bg-gray-200" />
          <div className="container w-full h-full px-6 mx-auto text-center md:px-16">
            <p className="text-base leading-8 tracking-wide text-center">
              Copyright Ⓒ {nowYear.getFullYear()}{" "}
              <span className="font-semibold text-primary">Saeed Altout </span>
              All rights reserved.
            </p>
            <ul className="flex items-center justify-center gap-10 py-10">
              {socialMedia.map((icon) => (
                <Link
                  href={icon.link}
                  key={icon.id}
                  className="text-2xl text-black duration-300 ease-in-out hover:text-primary"
                >
                  {icon.icon}
                </Link>
              ))}
            </ul>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Footer;
