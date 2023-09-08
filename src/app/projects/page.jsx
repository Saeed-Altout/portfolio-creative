"use client";
import {
  Button,
  Container,
  Navbar,
  TitleSection,
  Settings,
  AreaProjects,
  BlackLayer,
  Categories,
} from "@/components";
import { Footer } from "@/layouts";
import { tag } from "@/app/style";
import { FiArrowUpRight } from "react-icons/fi";
import { useStateContext } from "@/contexts/ContextProvider";
const ProjectPage = () => {
  const { setActiveMenu, currentMode, category } = useStateContext();
  return (
    <div
      className={`${
        currentMode === "dark" ? "dark" : "light"
      } overflow-x-hidden relative`}
    >
      <header>
        <Navbar />
      </header>
      <Settings />
      <BlackLayer />
      <main
        className="bg-white dark:bg-darker"
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <section className={tag.section}>
          <Container>
            <TitleSection
              title="All projects"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod."
            />
            <Categories />
            <AreaProjects category={category} />
            <Button
              href="/#projects"
              text="Go Back Home"
              icon={<FiArrowUpRight />}
              styles={`mt-20 mx-auto bg-black text-white`}
            />
          </Container>
        </section>
      </main>
      <footer
        className="bg-white dark:bg-darker"
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default ProjectPage;
