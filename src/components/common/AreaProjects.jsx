"use client";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "@/components";
import { flex, text } from "@/app/style";
import { dataProjects } from "@/constants";
import { FaEye, FaGithub, FaHeart } from "react-icons/fa";
import { useStateContext } from "@/contexts/ContextProvider";

const AreaProjects = ({ category }) => {
  const { currentTheme, setProject, likes, handleLikes } = useStateContext();
  return (
    <div className="w-full min-h-[650px]">
      <Grid>
        {dataProjects.map((project, key) => (
          <div key={key}>
            {category !== "all" ? (
              category === project.category && (
                <div
                  className={`${flex.start} flex-col text-center duration-300 ease-in-out bg-white dark:bg-dark border-2 rounded-xl border-gray-50 hover:border-gray-100 overflow-hidden dark:border-darker dark:hover:border-dark shadow-sm hover:shadow-lg`}
                >
                  <div className="w-full h-[384px]">
                    <Image
                      src={project.img}
                      alt="Image Project"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="w-full p-5 text-left">
                    <div className={`${flex.between} w-full mb-2 capitalize`}>
                      <h3 className={text.h3}>{project.title}</h3>
                      <h6 className={text.h6}>{project.price}</h6>
                    </div>

                    <p className={text.p}>
                      {project.shortDesc}
                      <Link
                        href={`/projects/${project.title}`}
                        onClick={() => setProject(project.title)}
                        style={{ color: currentTheme }}
                      >
                        {" "}
                        ...see more.
                      </Link>
                    </p>

                    <div
                      className={`${flex.between} mt-5 text-black dark:text-white`}
                    >
                      <button
                        type="button"
                        onClick={handleLikes}
                        className={`${flex.center} gap-2 pr-4 text-lg cursor-pointer`}
                      >
                        <FaHeart /> {likes}
                      </button>
                      <Link
                        href={project.domain}
                        className={`${flex.center} gap-2 pr-4 text-lg cursor-pointer`}
                      >
                        <FaGithub /> Source
                      </Link>
                      <Link
                        href={project.href}
                        className={`${flex.center} gap-2 pr-4 text-lg cursor-pointer`}
                      >
                        <FaEye /> Privew
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div
                className={`${flex.start} flex-col text-center duration-300 ease-in-out bg-white dark:bg-dark border-2 rounded-xl border-gray-50 hover:border-gray-100 overflow-hidden dark:border-darker dark:hover:border-dark shadow-sm hover:shadow-lg`}
              >
                <div className="w-full h-[384px]">
                  <Image
                    src={project.img}
                    alt="Image Project"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="w-full p-5 text-left">
                  <div className={`${flex.between} w-full mb-2 capitalize`}>
                    <h3 className={text.h3}>{project.title}</h3>
                    <h6 className={text.h6}>{project.price}</h6>
                  </div>

                  <p className={text.p}>
                    {project.shortDesc}
                    <Link
                      href={`/projects/${project.title}`}
                      onClick={() => setProject(project.title)}
                      style={{ color: currentTheme }}
                    >
                      {" "}
                      ...see more.
                    </Link>
                  </p>

                  <div
                    className={`${flex.between} mt-5 text-black dark:text-white`}
                  >
                    <button
                      type="button"
                      onClick={handleLikes}
                      className={`${flex.center} gap-2 pr-4 text-lg cursor-pointer`}
                    >
                      <FaHeart /> {likes}
                    </button>
                    <Link
                      href={project.domain}
                      className={`${flex.center} gap-2 pr-4 text-lg cursor-pointer`}
                    >
                      <FaGithub /> Source
                    </Link>
                    <Link
                      href={project.href}
                      className={`${flex.center} gap-2 pr-4 text-lg cursor-pointer`}
                    >
                      <FaEye /> Privew
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default AreaProjects;
