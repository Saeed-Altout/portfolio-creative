"use client";
import { Navbar, Settings } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";
import { About, Skills } from "@/layouts";
import React from "react";

const AboutPage = () => {
  const {
    currentTheme,
    setProjetActive,
    likes,
    handleLikes,
    setActiveMenu,
    setSettings,
    settings,
    activeMenu,
  } = useStateContext();
  return (
    <>
      <Navbar />
      {settings && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#0009] z-[500]"
          onClick={() => {
            setSettings(false);
          }}
        />
      )}
      <div
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <Settings />
        <About />
      </div>
    </>
  );
};

export default AboutPage;
