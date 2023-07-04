import Link from "next/link";
import profile from "../images/profile.png";
import Image from "next/image";
const Main = () => {
  return (
    <main className="border flex justify-center items-center h-screen">
      <div className="">
        <div className="absolute top-12">
          <div className=" ">
            <Image
              className="w-14 border rounded-full object-fill"
              src={profile}
              alt="pro"
            ></Image>
          </div>
        </div>
        <div className="flex gap-5 justify-between ">
          <button className="border p-3 rounded-md hover:border-green-400">
            <Link href={"mailto:masudrahman.dev@gmail.com"}>Contact</Link>
          </button>

          <Link
            className="border p-3 rounded-md hover:border-green-400"
            href={
              "https://drive.google.com/file/d/1J29szfnfhzINeEyuIKfaCzX2Q28JXHya/view?usp=sharing"
            }
          >
            Resume
          </Link>

          <Link
            className="border p-3 rounded-md hover:border-green-400"
            href={"/projects"}
          >
            Projects
          </Link>
        </div>

        <div className="my-12">
          <h1 className="text-5xl md:text-7xl">Masud Rahman</h1>
          <h2 className="text-xl pl-1">MERN Stack Developer</h2>
        </div>
        <div className="flex gap-5 justify-between  ">
          <button className="border p-3 rounded-md hover:border-green-400">
            <Link href={"https://github.com/masudrahman-dev"}>Github</Link>
          </button>
          <button className="border p-3 rounded-md hover:border-green-400">
            <Link href={"https://www.facebook.com/masudrahman.dev/"}>
              Facebook
            </Link>
          </button>
          <button className="border p-3 rounded-md hover:border-green-400">
            <Link href={"https://www.linkedin.com/in/masud-rahman-dev/"}>
              Linkedin
            </Link>
          </button>
        </div>

        {/* <div>
          <ul className="flex justify-center">
            <li>
              {" "}
              <a
                target="_blank"
                class="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                href="mailto:dev@chronark.com"
              >
                <span
                  class="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                ></span>
                <span class="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>{" "}
              </a>
            </li>
            <li>
              {" "}
              <a
                target="_blank"
                class="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              >
                <span
                  class="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                ></span>
                <span class="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>{" "}
              </a>
            </li>
            <li>
              {" "}
              <a
                target="_blank"
                class="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                href="mailto:dev@chronark.com"
              >
                <span
                  class="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                ></span>
                <span class="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>{" "}
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </main>
  );
};

export default Main;
