import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants";
import { FaEye, FaGithub } from "react-icons/fa";
import { useStateContext } from "@/contexts/ContextProvider";
const AreaProjects = ({ category }) => {
  const { setProject } = useStateContext();
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project, key) => (
        <div key={key}>
          {category !== "all" ? (
            category === project.category && (
              <div className="overflow-hidden transition shadow-md hover:scale-105 hover:shadow-lg">
                <Link
                  href={`/projects/${project.title}`}
                  onClick={() => setProject(project.title)}
                >
                  <Image
                    src={project.img}
                    alt="Image Project"
                    className="object-cover w-full"
                  />
                </Link>

                <div className="p-5">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-2xl font-medium capitalize">
                      {project.title}
                    </h3>
                    <span>{project.price}</span>
                  </div>
                  <p>
                    {project.shortDesc}
                    <Link
                      href={`/projects/${project.title}`}
                      onClick={() => setProject(project.title)}
                      className="font-semibold"
                    >
                      {" "}
                      ...see more.
                    </Link>
                  </p>

                  <div className="flex items-center justify-between mt-10">
                    <Link
                      href={project.domain}
                      className="flex items-center justify-center gap-1"
                    >
                      <FaGithub /> Source
                    </Link>
                    <Link
                      href={project.href}
                      className="flex items-center justify-center gap-1"
                    >
                      <FaEye /> Privew
                    </Link>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="overflow-hidden transition shadow-md hover:scale-105 hover:shadow-lg">
              <Link
                href={`/projects/${project.title}`}
                onClick={() => setProject(project.title)}
              >
                <Image
                  src={project.img}
                  alt="Image Project"
                  className="object-cover w-full"
                />
              </Link>

              <div className="p-5">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-2xl font-medium capitalize">
                    {project.title}
                  </h3>
                  <span>{project.price}</span>
                </div>
                <p>
                  {project.shortDesc}
                  <Link
                    href={`/projects/${project.title}`}
                    onClick={() => setProject(project.title)}
                    className="font-semibold"
                  >
                    {" "}
                    ...see more.
                  </Link>
                </p>

                <div className="flex items-center justify-between mt-10">
                  <Link
                    href={project.domain}
                    className="flex items-center justify-center gap-1"
                  >
                    <FaGithub /> Source
                  </Link>
                  <Link
                    href={project.href}
                    className="flex items-center justify-center gap-1"
                  >
                    <FaEye /> Privew
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AreaProjects;
