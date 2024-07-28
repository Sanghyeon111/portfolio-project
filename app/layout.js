import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sang Portfolio",
  description: "This is Sang's portfolio project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <div className="relative z-0">
          <StarsCanvas />
        </div>
        <div className="relative z-10">
          {children}
          {/* <Navbar /> */}
        </div>
      </body>
    </html>
  );
}
