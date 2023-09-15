"use client";
import { FiArrowUpRight } from "react-icons/fi";
import { AreaProjects, Button, Categories } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";
const Projects = () => {
  const { category } = useStateContext();
  return (
    <section id="projects">
      <div className="container">
        {/* Title Section */}

        <div className="max-w-4xl text-center lg:text-left">
          <h2 className="text-4xl font-bold capitalize text-primary md:text-5xl">
            Latest projects
          </h2>
          <p>
            We show you the latest projects that I have worked on. I hope you
            like it. You can choose the type of projects you want, as we show
            you the latest projects for websites as well as for mobile. Also, by
            clicking on the buttons, you can see the projects live or code on my
            repo.
          </p>
        </div>

        {/* Area Projects */}
        <Categories />
        <AreaProjects category={category} />
        <Button
          href="projects"
          text="See More"
          icon={<FiArrowUpRight />}
          styles={"mt-20 mx-auto"}
        />
      </div>
    </section>
  );
};

export default Projects;
