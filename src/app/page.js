"use client";
import { ButtonSettings, Navbar } from "@/components";
import {
  Contact,
  Footer,
  Projects,
  Services,
  Hero,
  ProofState,
  Clients,
  Skills,
} from "@/layouts";
import { useStateContext } from "@/contexts/ContextProvider";
const Home = () => {
  const { mode } = useStateContext();
  return (
    <div
      className={`${
        mode == "dark" ? "dark" : "light"
      } relative overflow-x-hidden w-full`}
    >
      <ButtonSettings />
      <div className="bg-white dark:bg-darker">
        <header className="h-screen">
          <Navbar />
          <Hero />
        </header>
        <main>
          <Services />
          <Projects />
          <Skills />
          <Clients />
          <ProofState />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
