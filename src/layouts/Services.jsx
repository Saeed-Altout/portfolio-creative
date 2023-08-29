"use client";
import { Button, TitleSection, Wrapper } from "@/components";
import { services } from "@/constants";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const Services = () => {
  return (
    <section className="relative py-40" id="services">
      <Wrapper styles="flex flex-col justify-center items-center gap-20">
        <TitleSection
          styles="text-center"
          title="Provide Services"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod."
        />
        <div className="flex flex-wrap items-center justify-center gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="max-w-sm p-10 text-center duration-300 ease-in-out bg-white border-2 rounded-lg border-gray-50 lg:max-w-sm hover:border-gray-100 "
            >
              <div className="w-20 h-20 mx-auto my-5 overflow-hidden rounded-2xl">
                <Image
                  src={service.icon}
                  alt="Icon Services"
                  className="object-cover w-auto h-auto"
                />
              </div>
              <h3 className="text-3xl font-semibold text-black">
                {service.title}
              </h3>
              <p className="py-5 text-base font-normal leading-8 ">
                {service.descr}
              </p>

              <Button
                href="contact"
                text="Contact"
                icon={<FiArrowUpRight />}
                color={service.color}
                styles={`mt-5 mx-auto text-white`}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Services;
