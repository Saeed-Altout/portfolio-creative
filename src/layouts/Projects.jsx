"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { tag, flex, text } from "@/app/style";
import { FaEye, FaGithub, FaHeart } from "react-icons/fa";
import { Button, Container, Grid, TitleSection } from "@/components";
import { dataProjects } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";
const Projects = () => {
  const {
    currentTheme,
    setProjetActive,
    category,
    setCategory,
    likes,
    handleLikes,
  } = useStateContext();

  return (
    <section className={tag.section} id="projects">
      <Container>
        <TitleSection
          title="Latest projects"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod."
        />

        {/* Category */}
        <div className={`${flex.center} gap-8 mt-20`}>
          {["all", "web", "mobile"].map((cat, key) => (
            <button
              key={key}
              type="button"
              className={`px-6 py-2 rounded-lg text-black dark:text-white capitalize duration-300 ease-in-out block w-fit`}
              onClick={() => setCategory(cat)}
              style={{
                backgroundColor: cat == category && currentTheme,
                color: cat == category && "#fff",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Area Projects */}
        <Grid>
          {dataProjects.map((project, key) => (
            <div
              key={key}
              className={`${flex.center} flex-col sm:max-w-sm text-center duration-300 ease-in-out bg-white dark:bg-dark border-2 rounded-xl border-gray-50 hover:border-gray-100 overflow-hidden dark:border-darker dark:hover:border-dark shadow-sm hover:shadow-lg`}
            >
              <div className="w-full h-full">
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
                  {project.description}
                  <Link
                    href={`/projects/${project.title}`}
                    onClick={() =>
                      setProjetActive((prev) => (prev = project.title))
                    }
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
          ))}
        </Grid>

        <Button
          href="projects"
          text="See More"
          icon={<FiArrowUpRight />}
          styles={`mt-20 mx-auto text-white`}
        />
      </Container>
    </section>
  );
};

export default Projects;
