"use client";
import {
  AreaProjects,
  Button,
  Navbar,
  TitleSection,
  Wrapper,
} from "@/components";

import { FiArrowUpRight } from "react-icons/fi";
const ProjectPage = () => {
  return (
    <>
      <Navbar />
      <section className="relative py-40">
        <Wrapper styles="flex flex-col justify-center items-center gap-20">
          <TitleSection
            styles="text-left w-full"
            title="All projects"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod."
          />
          <AreaProjects fillter={false} />
          <Button
            href="/#projects"
            text="Go Back Home"
            icon={<FiArrowUpRight />}
            styles={`mt-5 mx-auto bg-black text-white`}
          />
        </Wrapper>
      </section>
    </>
  );
};

export default ProjectPage;
