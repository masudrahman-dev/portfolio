import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import profile from "@/images/profile.png";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Masud Rahman",
  description: "MERN Stack Developer",
  

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="px-2">
          <nav className="max-w-screen-myMd mx-auto mt-7">
            <ul className="flex flex-col gap-5 md:flex-row justify-between items-center">
              <li>
                <Link href={"/"}>
                  <Image
                    className="w-14 border   rounded-full object-fill"
                    src={profile}
                    alt="pro"
                  ></Image>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <button
                    className="border       
                 animate-pulse   p-3 rounded-md hover:border-green-400  hover:text-green-400 "
                  >
                    +88 01704445275 | masudrahman.dev@gmail.com
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-20">{children}</div>
        </main>
      </body>
    </html>
  );
}
