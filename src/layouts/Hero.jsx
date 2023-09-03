import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import hero from "@/assets/images/hero.png";
import { Button, ButtonScroll, Wrapper } from "@/components";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Wrapper styles="h-full flex justify-center items-center gap-10 flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center max-w-4xl gap-5 md:items-start">
          <h1 className="text-3xl font-extrabold text-center text-primary md:text-left md:text-5xl lg:text-6xl">
            <span className="inline-block mr-2 text-black md:mb-4">
              👋 Hey there, I Am Saeed
            </span>
            Front-End
          </h1>

          <p className="text-base leading-8 tracking-wide text-center md:text-left text-gray">
            Product Designer and Visual Developer in SF. I specialize in UI/UX
            Design, Responsive Web Design, and Visual Development.
          </p>

          <div className="flex items-center justify-center gap-10 mx-auto md:mx-0 md:mr-auto w-fit">
            <Button
              href="contact"
              text="Contact"
              icon={<FiArrowUpRight />}
              styles="bg-black mt-5 text-white"
            />
            <Button
              href="projects"
              text="Projects"
              icon={<FiArrowUpRight />}
              styles="bg-black mt-5 text-white"
            />
          </div>
        </div>

        <div className="relative max-w-[350px] mx-auto hidden md:block">
          <Image
            src={hero}
            alt="Hero"
            className="object-contain w-auto h-auto"
          />
        </div>
      </Wrapper>
      <ButtonScroll href={"#services"} />
    </section>
  );
};

export default Hero;
