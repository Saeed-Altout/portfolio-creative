"use client";
// import { emailjs } from "@emailjs/browser";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [settings, setSettings] = useState(false);
  const [mode, setMode] = useState("light");
  const [currentTheme, setCurrentTheme] = useState("#d083ff");
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [projetActive, setProjetActive] = useState("");
  const [category, setCategory] = useState("all");
  const [likes, setLikes] = useState(0);
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

        year,
        projetActive,
        setProjetActive,
        currentTheme,
        setCurrentTheme,
        settings,
        setSettings,
        mode,
        setMode,
        category,
        setCategory,
        likes,
        setLikes,
        handleLikes,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
