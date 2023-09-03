"use client";
import { Navbar } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";
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
const Home = () => {
  return (
    <div className="relative overflow-x-hidden dark:bg-black">
      <header className="relative w-full h-screen ">
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

// onClick={() => {
//   setActiveDropDown(() => false);
//   setActiveMenu(() => false);
// }}
