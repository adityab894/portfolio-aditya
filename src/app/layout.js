import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-family-primary",
  display: "swap",
});

export const metadata = {
  title: "Innovator - Software Developer Portfolio",
  description:
    "Crafting Innovative Digital Solutions. Portfolio of a software developer specializing in efficient project management and creative problem-solving.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased overflow-x-hidden`}>
        <Navbar />
        <div className="page-transition">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
