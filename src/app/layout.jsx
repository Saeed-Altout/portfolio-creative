import "./globals.css";

import { ContextProvider } from "@/contexts/ContextProvider";

export const metadata = {
  title: "Saeed Altout | Portfolio",
  description: "My Portfolio To Show My Works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className="w-full overflow-x-hidden bg-white">{children}</body>
      </ContextProvider>
    </html>
  );
}
