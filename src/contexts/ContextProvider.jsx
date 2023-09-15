"use client";
import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [projetActive, setProjetActive] = useState("/");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const currentProjectActive = localStorage.getItem("project");
    if (currentProjectActive) {
      setProjetActive(currentProjectActive);
    }
  }, [projetActive]);

  const setProject = (project) => {
    localStorage.setItem("project", project);
    setProjetActive(project);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const year = new Date().getFullYear();
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        scrolled,
        year,
        projetActive,
        setProjetActive,
        category,
        setCategory,
        setProject,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
