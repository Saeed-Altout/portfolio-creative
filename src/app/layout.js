"use client";
import { useState } from "react";
import "./globals.css";
import { ContextProvider } from "@/contexts/ContextProvider";
export const metadata = {
  title: "Portfolio Creative",
  description: "My Portfolio To Show Latest Projects",
};

export default function RootLayout({ children }) {
  const [currentMode] = useState("light");
  return (
    <html lang="en">
      <ContextProvider>
        <body className={currentMode === "dark" ? "dark" : "light"}>
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}
