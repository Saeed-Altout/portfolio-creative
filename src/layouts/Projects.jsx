import { AreaProjects, Button, TitleSection, Wrapper } from "@/components";
import { FiArrowUpRight } from "react-icons/fi";
const Projects = () => {
  return (
    <section className="relative py-40" id="projects">
      <Wrapper styles="flex flex-col justify-center items-center gap-20">
        <TitleSection
          styles="text-center"
          title="Latest projects"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod."
        />
        <AreaProjects fillter={true} />
        <Button
          href="projects"
          text="See More"
          icon={<FiArrowUpRight />}
          styles={`mt-5 bg-black mx-auto text-white`}
        />
      </Wrapper>
    </section>
  );
};

export default Projects;
