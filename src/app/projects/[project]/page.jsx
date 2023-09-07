"use client";
import Image from "next/image";
import { FaClock, FaPenSquare, FaSquare, FaStar, FaUser } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { dataProjects } from "@/constants";
import { Button, Navbar } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";
import Link from "next/link";

const ProjectPage = () => {
  const { projetActive, setProjetActive } = useStateContext();
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      {dataProjects.map(
        (project, key) =>
          project.title === projetActive && (
            <div key={key} className="flex flex-col w-full h-full gap-10 py-20">
              <div className="w-full h-full">
                <Image
                  src={project.img}
                  alt="Image Project"
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="w-full p-10">
                <h1 className="flex items-center justify-start gap-3 text-4xl font-semibold tracking-wide">
                  {project.title}
                  <span className="text-3xl text-yellow-300">
                    {project.favorite ? <FaStar /> : null}
                  </span>
                </h1>

                <div className="mt-5 mb-10">
                  {project.moreDataProject.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col items-start justify-start gap-4 text-lg font-normal tracking-wide text-black"
                    >
                      <span className="flex items-center justify-start gap-3 text-gray-400">
                        <FaUser /> <p className="text-black">{item.coding}</p>
                      </span>
                      <span className="flex items-center justify-start gap-3 text-gray-400">
                        <FaPenSquare />
                        <p className="text-black">{item.design}</p>
                      </span>
                      <span className="flex items-center justify-start gap-3 text-gray-400">
                        <FaClock /> <p className="text-black">{item.hours} H</p>
                      </span>
                      <span className="flex flex-col items-start justify-start gap-3 text-gray-400">
                        <FaSquare />
                        {item.tools.map((tool, index) => (
                          <p key={index} className="text-black ">
                            {...tool}
                          </p>
                        ))}
                      </span>
                      <div className="flex flex-col gap-3">
                        {item.links.map((link, key) => (
                          <Link href={link} key={key} className="text-base">
                            {link}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="py-5 text-base font-normal md:text-lg">
                  <span className="block mb-2 text-2xl font-medium">
                    About This Project
                  </span>
                  {project.description}
                </p>

                <div className="py-5 text-base font-normal md:text-lg">
                  <span className="block mb-2 text-2xl font-medium">
                    Colors
                  </span>
                  <div className="flex flex-wrap items-start justify-start gap-5">
                    {project.colors.map((color, index) => (
                      <span
                        key={index}
                        className="block w-16 h-16"
                        style={{
                          backgroundColor: color,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div
                  className="mt-10 ml-auto w-fit"
                  onClick={() => setProjetActive(() => null)}
                >
                  <Button
                    href="/projects"
                    text="Back"
                    icon={<FiArrowUpRight />}
                    styles={`mt-5 bg-black ml-auto mb-auto text-white`}
                  />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProjectPage;
