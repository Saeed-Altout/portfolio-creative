import "./globals.css";
import { ContextProvider } from "@/contexts/ContextProvider";
export const metadata = {
  title: "Saeed Altout",
  description: "My Portfolio To Show My Works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body>{children}</body>
      </ContextProvider>
    </html>
  );
}
