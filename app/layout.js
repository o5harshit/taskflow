import Navbar from "./components/dashboard/Navbar";
import Footer from "./components/ui/footer";
import "./globals.css";

export const metadata = {
  title: "TaskFlow",
  description: "Project management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}