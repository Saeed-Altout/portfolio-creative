import "./globals.css";
import { ContextProvider } from "@/contexts/ContextProvider";
export const metadata = {
  title: "Portfolio Creative",
  description: "My Portfolio To Show Latest Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={"light" === "dark" ? "dark" : "light"}>
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}
