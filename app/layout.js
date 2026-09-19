
import { Inter } from "next/font/google";
import Navbar from "./components/dashboard/Navbar";
import Footer from "./components/ui/footer";

import "./globals.css";
import { Providers } from "./providers";
import StoreProvider from "../src/store/Provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TaskFlow",
  description: "Project management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Providers>
          <StoreProvider>
          {children}
        </StoreProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
