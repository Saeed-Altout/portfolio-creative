"use client";
import Image from "next/image";
import { FaClock, FaPenSquare, FaStar, FaUser } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";
import { Button } from "@/components";
import { Navbar, Footer } from "@/layouts";
import Link from "next/link";

const ProjectPage = () => {
  const { projetActive, setActiveMenu } = useStateContext();
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
        {projects.map(
          (project, key) =>
            project.title === projetActive && (
              <div
                key={key}
                className="flex flex-col w-full h-full gap-10 pt-20"
              >
                <Image
                  src={project.img}
                  alt="Image Project"
                  className="object-contain w-full h-full"
                />

                <div className="container">
                  <div className="relative w-fit">
                    <h1 className="mb-3 text-3xl font-semibold capitalize">
                      {project.title}
                    </h1>
                    <span className="absolute text-xl text-yellow-300 -top-5 -right-5">
                      {project.favorite ? <FaStar /> : null}
                    </span>
                  </div>

                  {project.moreDataProject.map((item, key) => (
                    <div key={key} className="flex flex-col gap-1">
                      <span className="flex items-center justify-start gap-2">
                        <FaUser />
                        <p>{item.coding}</p>
                      </span>
                      <span className="flex items-center justify-start gap-2">
                        <FaPenSquare />
                        <p>{item.design}</p>
                      </span>
                      <span className="flex items-center justify-start gap-2">
                        <FaClock />
                        <p>{item.hours}</p>
                      </span>

                      <div className="flex-col gap-3">
                        <h3 className="text-xl font-semibold">Tools:</h3>
                        {item.tools.map((tool, key) => (
                          <p
                            key={key}
                            className="flex items-center justify-start gap-2"
                          >
                            <span className="block w-2 h-2 bg-black rounded-full dark:bg-white" />
                            {...tool}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-col gap-3">
                        {item.links.map((link, key) => (
                          <Link
                            href={link}
                            key={key}
                            className="flex items-center justify-start gap-2"
                          >
                            <span className="block w-2 h-2 bg-black rounded-full dark:bg-white" />
                            {link}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="mt-10">
                    <h3 className="text-xl font-semibold">
                      About This Project:
                    </h3>

                    <div className="flex flex-col gap-5 mt-3">
                      {project.description.map((p, key) => (
                        <p key={key}>{p}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-semibold">Colors:</h3>
                    <div className="flex items-center justify-start gap-10 mt-3">
                      {project.colors.map((color, key) => (
                        <div
                          key={key}
                          className="flex flex-col items-center justify-center gap-3"
                        >
                          <span
                            className="block w-12 h-12"
                            style={{
                              backgroundColor: color,
                            }}
                          />

                          <p>{color}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    href="/projects"
                    text="Back"
                    icon={<FiArrowUpRight />}
                    styles="mt-28 ml-auto"
                  />
                </div>
              </div>
            )
        )}
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

export default ProjectPage;
