import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
// import TypeIt from "typeit-react";
import hero from "@/assets/images/hero.png";
// import { motion } from "framer-motion";
import { Button, ButtonScroll, Wrapper } from "@/components";
const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Wrapper styles="h-full flex justify-center items-center gap-10 flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center max-w-4xl gap-5 md:items-start">
          <h1 className="text-3xl font-extrabold text-center text-primary md:text-left md:text-5xl lg:text-6xl">
            <span className="inline-block text-black md:mb-4 ">
              👋 Hey there, I'm Saeed{" "}
            </span>
            <br className="block" />
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
{
  /* <TypeIt
getBeforeInit={(instance) => {
  instance
    .pause(2000)
    .type("Front-End Developer ")
    .pause(3000)
    .delete(20)
    .type("Back-End Developer ")
    .pause(3000)
    .delete(21)
    .type("Full-Stack Developer ")
    .pause(3000);
  return instance;
}}
options={{
  loop: true,
}}
className="text-primary"
/> */
}

// <motion.div
// animate={{
//   rotate: 360,
// }}
// transition={{
//   type: "tween",
//   duration: 5,
//   repeat: Infinity,
//   repeatType: "loop",
//   ease: "linear",
// }}
// className="absolute -top-[25%] -right-[25%] w-[150%] h-[150%] border-4 border-gray-200 border-dashed rounded-full -z-50 "
// >
// <span className="block w-6 h-6 bg-primary rounded-full top-[-102px] left-[50%] absolute translate-x-[-50%]"></span>
// <span className="block w-6 h-6  rounded-full top-[500px] left-[50px] absolute bg-primary"></span>
// <span className="block w-12 h-12  rounded-full top-[468px] right-[50px] absolute bg-primary"></span>
// <span className="block w-6 h-6  rounded-full top-[520px] right-[50px] absolute bg-primary"></span>
// </motion.div>
