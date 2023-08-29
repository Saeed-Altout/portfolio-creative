"use client";
import { Button } from "@/components";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const GraphicDesigner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-20">
      <p className="text-3xl font-semibold text-center">
        Sorry, The Page Not Found
      </p>

      <Button
        href="/"
        text="Go Back home"
        icon={<FiArrowUpRight />}
        styles={`mt-5 bg-black mx-auto text-white`}
      />
    </div>
  );
};

export default GraphicDesigner;
