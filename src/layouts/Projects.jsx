"use client";
import { FiArrowUpRight } from "react-icons/fi";
import { tag } from "@/app/style";

import {
  AreaProjects,
  Button,
  Categories,
  Container,
  TitleSection,
} from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";
const Projects = () => {
  const { category } = useStateContext();

  return (
    <section className={tag.section} id="projects">
      <Container>
        <TitleSection
          title="Latest projects"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod."
        />
        <Categories />
        <AreaProjects category={category} />
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
