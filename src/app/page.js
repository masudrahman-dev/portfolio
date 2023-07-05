import Link from "next/link";
import profile from "../images/profile.png";
import "./page.css";
const Main = () => {
  return (
    <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full   max-w-screen-myMd mx-auto ">
      <div className="flex justify-between mx-2">
        <Link
          href={
            "https://drive.google.com/file/d/1J29szfnfhzINeEyuIKfaCzX2Q28JXHya/view?usp=sharing"
          }
        >
          <button className="border p-3 rounded-md hover:border-green-400  hover:text-green-400 hover:scale-105 transition duration-300">
            Resume
          </button>
        </Link>
        <Link href={"/skills"}>
          <button className="border p-3 rounded-md hover:border-green-400  hover:text-green-400 hover:scale-105 transition duration-300">
            Skills
          </button>
        </Link>

        <Link href={"/projects"}>
          <button className="border p-3 rounded-md hover:border-green-400  hover:text-green-400 hover:scale-105 transition duration-300">
            Projects
          </button>
        </Link>
      </div>
      <div className="my-20  mx-2 flex  items-center md:items-start flex-col">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-semibold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent animate-bounce  ">
            Masud Rahman
          </h1>
          <h2 className="text-xl pl-1 mt-2 ">MERN Stack Developer</h2>
        </div>
      </div>
      <div className="flex  justify-between mx-2 ">
        <Link href={"https://github.com/masudrahman-dev"}>
          <button className="border p-3 rounded-md hover:border-green-400  hover:text-green-400 hover:scale-105 transition duration-300">
            Github
          </button>
        </Link>
        <Link href={"https://www.facebook.com/masudrahman.dev/"}>
          <button className="border p-3 rounded-md hover:border-green-400  hover:text-green-400 hover:scale-105 transition duration-300">
            Facebook
          </button>
        </Link>
        <Link href={"https://www.linkedin.com/in/masud-rahman-dev/"}>
          <button className="border p-3 rounded-md hover:border-green-400  hover:text-green-400 hover:scale-105 transition duration-300">
            Linkedin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
