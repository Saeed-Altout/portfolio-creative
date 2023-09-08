"use client";
import Image from "next/image";
import { FaClock, FaPenSquare, FaSquare, FaStar, FaUser } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { dataProjects } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";
import { Button, Navbar, Settings, BlackLayer, Container } from "@/components";
import { Footer } from "@/layouts";
import Link from "next/link";
import { flex, text } from "@/app/style";

const ProjectPage = () => {
  const { projetActive, setActiveMenu, currentMode, setTheme, currentTheme } =
    useStateContext();
  return (
    <div
      className={`${
        currentMode === "dark" ? "dark" : "light"
      } overflow-x-hidden relative`}
    >
      <header>
        <Navbar />
      </header>
      <Settings />
      <BlackLayer />
      <main
        className="bg-white dark:bg-darker"
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <div className="w-full overflow-x-hidden">
          {dataProjects.map(
            (project, key) =>
              project.title === projetActive && (
                <div
                  key={key}
                  className="flex flex-col w-full h-full gap-10 py-20"
                >
                  <div className="w-full h-full">
                    <Image
                      src={project.img}
                      alt="Image Project"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <Container styles={`${flex.start} flex-col gap-5`}>
                    <div className={`${flex.start}  relative w-fit`}>
                      <h1
                        className={`${text.h1}`}
                        style={{
                          color: currentTheme,
                        }}
                      >
                        {project.title}
                      </h1>
                      <span className="absolute text-2xl text-yellow-300 -top-5 -right-5">
                        {project.favorite ? <FaStar /> : null}
                      </span>
                    </div>

                    <div>
                      {project.moreDataProject.map((item, key) => (
                        <div
                          key={key}
                          className={`${flex.start} flex-col gap-4 `}
                        >
                          <span
                            className={`${flex.center} gap-2 dark:text-white text-black`}
                          >
                            <FaUser />{" "}
                            <p className={`${text.p}`}>{item.coding}</p>
                          </span>
                          <span
                            className={`${flex.center} gap-2 dark:text-white text-black`}
                          >
                            <FaPenSquare />
                            <p className={`${text.p}`}>{item.design}</p>
                          </span>
                          <span
                            className={`${flex.center} gap-2 dark:text-white text-black`}
                          >
                            <FaClock />{" "}
                            <p className={`${text.p}`}>{item.hours}</p>
                          </span>
                          <span className={`${flex.start} flex-col gap-3`}>
                            <h3
                              className={text.h3}
                              style={{
                                color: currentTheme,
                              }}
                            >
                              Tools:
                            </h3>
                            {item.tools.map((tool, key) => (
                              <p
                                key={key}
                                className={`${text.p} ${flex.center} gap-2`}
                              >
                                <span className="block w-2 h-2 bg-black rounded-full dark:bg-white" />
                                {...tool}
                              </p>
                            ))}
                          </span>
                          <div className="flex flex-col gap-3">
                            {item.links.map((link, key) => (
                              <Link href={link} key={key} className={text.p}>
                                {link}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3
                        className={text.h3}
                        style={{
                          color: currentTheme,
                        }}
                      >
                        About This Project:
                      </h3>
                      <div className={`${flex.start} flex-col gap-5 mt-5`}>
                        {project.description.map((p, key) => (
                          <p className={text.p} key={key}>
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3
                        className={text.h3}
                        style={{
                          color: currentTheme,
                        }}
                      >
                        Colors:
                      </h3>
                      <div className={`${flex.start}  flex-wrap gap-10 mt-5`}>
                        {project.colors.map((color, key) => (
                          <div key={key} className="flex flex-col gap-3">
                            <span
                              className="block w-12 h-12 cursor-pointer"
                              style={{
                                backgroundColor: color,
                              }}
                              onClick={() => setTheme(color)}
                            />

                            <p className={text.p}>{color}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="block mt-20 ml-auto w-fit">
                      <Button
                        href="/projects"
                        text="Back"
                        icon={<FiArrowUpRight />}
                        styles={`text-white`}
                      />
                    </div>
                  </Container>
                </div>
              )
          )}
        </div>
      </main>
      <footer
        className="bg-white dark:bg-darker"
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default ProjectPage;
