"use client";
import { Button, AreaProjects } from "@/components";
import { Footer, Navbar } from "@/layouts";
import { FiArrowUpRight } from "react-icons/fi";
import { useStateContext } from "@/contexts/ContextProvider";
const ProjectPage = () => {
  const { setActiveMenu } = useStateContext();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <section>
          {/* Title Section */}
          <div className="container">
            <div className="max-w-4xl text-center lg:text-left">
              <h2 className="text-4xl font-bold capitalize text-primary md:text-5xl">
                All projects
              </h2>
              <p>
                You are free to use this template for any purpose. You are not
                allowed to redistribute the downloadable ZIP file of Tale SEO
                Template on any other template website. Please contact us. Thank
                you.
              </p>
            </div>
            <AreaProjects category={"all"} />
            <Button
              href="/#projects"
              text="Go Back Home"
              icon={<FiArrowUpRight />}
              styles="mt-20 mx-auto"
            />
          </div>
        </section>
      </main>
      <footer
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <Footer />
      </footer>
    </>
  );
};

export default ProjectPage;
