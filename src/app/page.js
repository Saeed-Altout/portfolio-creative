"use client";
import { Settings, Navbar } from "@/components";
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
  const { mode, setActiveMenu, setSettings, settings, activeMenu } =
    useStateContext();
  return (
    <div
      className={`${
        mode == "dark" ? "dark" : "light"
      } relative overflow-x-hidden w-full`}
    >
      <Settings />
      <div className="relative bg-white dark:bg-darker">
        <header>
          <Navbar />
        </header>
        {settings && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-[#0009] z-[500]"
            onClick={() => {
              setSettings(false);
            }}
          />
        )}
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
          <ProofState />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
