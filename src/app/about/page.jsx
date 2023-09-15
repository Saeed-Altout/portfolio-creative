"use client";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { knowleadg, dataMe } from "@/constants";
import { Footer, Navbar } from "@/layouts";
import { Button } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";

const About = () => {
  const { setActiveMenu } = useStateContext();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <section>
          <div className="container">
            <div className="flex flex-col items-start justify-start w-full gap-10 lg:flex-row">
              {/* Image and Title */}
              <div className="flex flex-col items-start justify-start gap-4">
                <img
                  src="profile.jpg"
                  alt="Image Developer"
                  className="rounded-xl md:max-w-sm"
                />

                <h1 className="text-3xl font-medium text-primary">
                  Saeed Altout
                  <span className="block text-base font-normal leading-8 text-left text-black">
                    @saeedaltoutpro
                  </span>
                </h1>
              </div>

              {/* Infos */}
              <div className="flex flex-col items-start justify-start gap-4">
                {dataMe.map((item, key) => (
                  <p
                    key={key}
                    className="flex items-center justify-start gap-2"
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium text-black">
                      {item.title}:
                    </span>
                    <span>{item.text}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="w-full mt-10 text-left">
              <h2 className="text-3xl font-medium text-primary">About me:</h2>
              <p>
                An enthusiastic and creative professional web developer, I have
                the ability to create and develop effective and attractive web
                applications. With in-depth experience in currentModern web
                technologies and development tools, I always strive to deliver
                the highest levels of performance and quality in every project I
                participate in. I have strong skills in... Html5, Css3,
                JavaScript, Typescript, Boostrap5, Tailwind Css, ReactJS,
                NextJS, Api, Redux, Framer Motion and more... I am familiar with
                the standards and best practices for designing and developing
                user experiences in websites. Thanks to my extensive knowledge
                of responsive techniques and user interface design, I can
                transform ideas and requirements into stunning user experiences
                suitable for all devices. I excel at working as part of a team
                as well as independently, as I can understand complex projects
                and implement them efficiently and effectively. I am passionate
                about continuous learning and following currentModern
                technological developments, as I seek to hone my skills and
                expand my knowledge to stay up to date on the latest web
                development trends. I look for challenging opportunities and new
                projects to work on, where I can provide innovation and
                innovative solutions to meet clients needs. If you are looking
                for a professional web developer who has the knowledge and
                skills to turn your vision into reality, I am here to help. Feel
                free to contact me to discuss potential job opportunities or
                projects. I look forward to collaborating with you to make a
                positive impact and deliver exceptional user experiences on the
                web.
              </p>

              <div className="flex flex-col items-start justify-start w-full gap-12 p-5 mt-20 bg-white xl:flex-row">
                {knowleadg.map((group, key) => (
                  <div key={key} className="flex flex-col w-full gap-5">
                    <h2 className="text-2xl font-medium capitalize">
                      {group.title}
                    </h2>
                    {group.skills.map((skill, key) => (
                      <div key={key} className="flex flex-col w-full gap-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center justify-center gap-2">
                            <Image
                              alt="Icon Skill"
                              src={skill.icon}
                              width={40}
                            />
                            <p>{skill.title}</p>
                          </div>
                          <p>{skill.percentg}</p>
                        </div>

                        <span className="block w-full h-2 overflow-hidden bg-gray-200 rounded-xl">
                          <span
                            style={{
                              width: skill.percentg,
                            }}
                            className="relative bg-gradient-to-r from-[#fed7fb] to-primary h-2 block"
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <Button
              href="/#skills"
              text="Go Back Home"
              icon={<FiArrowUpRight />}
              styles="mt-36 mx-auto"
            />
          </div>
        </section>
      </main>
      <footer
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <Footer />
      </footer>
    </>
  );
};

export default About;
