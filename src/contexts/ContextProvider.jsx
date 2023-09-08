"use client";
import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [settings, setSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(false);

  const [currentMode, setCurrentMode] = useState("light");
  const [currentTheme, setCurrentTheme] = useState("#8bc7ff");
  const [projetActive, setProjetActive] = useState("/");
  const [category, setCategory] = useState("all");
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme");
    const currentThemeMode = localStorage.getItem("mode");
    const currentProjectActive = localStorage.getItem("project");
    if ((currentThemeColor && currentThemeMode) || currentProjectActive) {
      setProjetActive(currentProjectActive);
      setCurrentMode(currentThemeMode);
      setCurrentTheme(currentThemeColor);
    }
  }, [currentMode, currentTheme, projetActive]);

  const setMode = (mode) => {
    setCurrentMode(mode);
    localStorage.setItem("mode", mode);
  };

  const setTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };

  const setProject = (project) => {
    localStorage.setItem("project", project);
    setProjetActive(project);
  };

  const handleLikes = () => {
    setLikes(likes + 1);
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
        activeDropDown,
        setActiveDropDown,
        activeMenu,
        setActiveMenu,
        scrolled,
        setTheme,
        year,
        projetActive,
        setProjetActive,
        currentTheme,
        setCurrentTheme,
        settings,
        setSettings,
        currentMode,
        setCurrentMode,
        setMode,
        category,
        setCategory,
        likes,
        setLikes,
        handleLikes,
        setProject,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
