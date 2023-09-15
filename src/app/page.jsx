"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import {
  Navbar,
  Hero,
  Projects,
  Services,
  Skills,
  Clients,
  Contact,
  Footer,
} from "@/layouts";

const Home = () => {
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
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Clients />
        <Contact />
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

export default Home;
