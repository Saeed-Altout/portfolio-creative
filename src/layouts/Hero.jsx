import Link from "next/link";
import { motion } from "framer-motion";
import ProofState from "../components/ProofState";
const Hero = () => {
  return (
    <section>
      <div className="container flex flex-col items-center justify-between lg:flex-row">
        {/* Intro Hero */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-center lg:text-left">
            I am Saeed Altout,
            <br />
            <span className="text-5xl text-primary ">
              Full Stack & Mobile developer
            </span>
          </h1>
          <p className="mt-5 text-center lg:text-left">
            An enthusiastic and creative professional web developer, I have the
            ability to create and develop effective and attractive web
            applications. With in-depth experience in currentModern web
            technologies and development tools, I always strive to deliver the
            highest levels of performance and quality in every project I
            participate in.
          </p>
        </div>
        {/* Image Hero */}
        <img
          src="hero.png"
          alt="Hero Img"
          className="object-contain max-w-sm mx-auto lg:max-w-lg"
        />
      </div>

      {/* Proof State */}
      <ProofState />
      <div className="absolute flex items-center justify-center w-full bottom-10">
        <Link href={"#services"}>
          <div className="flex items-center justify-center w-10 h-16 p-2 border-2 border-black rounded-full">
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-black rounded-full"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
