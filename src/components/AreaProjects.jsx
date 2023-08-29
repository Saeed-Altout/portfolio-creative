"use client";
import { projects } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowUp, FaGithub, FaInfo } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const AreaProjects = ({ fillter }) => {
  const { projetActive, setProjetActive } = useStateContext();
  return (
    <>
      {fillter ? (
        <div className="flex flex-wrap items-center justify-center gap-10">
          {projects.map(
            (project) =>
              project.showAsTheBest && (
                <div
                  key={project.id}
                  className="max-w-sm overflow-hidden text-center duration-300 ease-in-out bg-white rounded-lg shadow-lg lg:max-w-sm hover:shadow-xl"
                >
                  <div className="w-full h-full">
                    <Image
                      src={project.img}
                      alt="Image Project"
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div className="p-5 text-left text-black">
                    <h3 className="text-2xl font-medium ">{project.title}</h3>
                    <p className="py-2 text-base font-normal">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-end w-full">
                      <Link
                        href={`/projects/${project.title}`}
                        className="block mt-5 w-fit"
                        onClick={() =>
                          setProjetActive((prev) => (prev = project.title))
                        }
                      >
                        <button className="flex items-center justify-center gap-3 px-4 py-2 text-lg font-medium duration-300 ease-in-out rounded-full">
                          Details
                          <span>
                            <FiArrowUpRight />
                          </span>
                        </button>
                      </Link>
                      <Link href={project.href} className="block mt-5 w-fit">
                        <button className="flex items-center justify-center gap-3 px-4 py-2 text-lg font-medium duration-300 ease-in-out rounded-full">
                          View
                          <span>
                            <FaGithub />
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-sm overflow-hidden text-center duration-300 ease-in-out bg-white rounded-lg shadow-lg lg:max-w-sm hover:shadow-xl"
            >
              <div className="w-full h-full">
                <Image
                  src={project.img}
                  alt="Image Project"
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="p-5 text-left text-black">
                <h3 className="text-2xl font-medium ">{project.title}</h3>
                <p className="py-2 text-base font-normal">
                  {project.description}
                </p>
                <div className="flex items-center justify-end w-full">
                  <Link
                    href={`/projects/${project.title}`}
                    className="block mt-5 w-fit"
                    onClick={() =>
                      setProjetActive((prev) => (prev = project.title))
                    }
                  >
                    <button className="flex items-center justify-center gap-3 px-4 py-2 text-lg font-medium duration-300 ease-in-out rounded-full">
                      Details
                      <span>
                        <FiArrowUpRight />
                      </span>
                    </button>
                  </Link>
                  <Link href={project.href} className="block mt-5 w-fit">
                    <button className="flex items-center justify-center gap-3 px-4 py-2 text-lg font-medium duration-300 ease-in-out rounded-full">
                      View
                      <span>
                        <FaGithub />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AreaProjects;
