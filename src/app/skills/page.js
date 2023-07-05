import Image from "next/image";
import Link from "next/link";

// expertise
import reactJs from "../../images/icons/React-icon.svg";
import javascript from "../../images/icons/Unofficial_JavaScript_logo_2.svg";
import expressJs from "../../images/icons/Expressjs.png";
import typescript from "../../images/icons/Typescript_logo_2020.svg";
import tailwindCSS from "../../images/icons/Tailwind_CSS_Logo.svg";
import ReactRouter from "../../images/icons/react-router-color-inverted.svg";
// Comfortable
import nextJs from "../../images/icons/Nextjs-logo.svg";
import mongodb from "../../images/icons/MongoDB_Logo.svg";
import cpp from "../../images/icons/ISO_C++_Logo.svg";
import Redux from "../../images/icons/redux.svg";
import Firebase from "../../images/icons/logo-standard.svg";
import JWT from "../../images/icons/jwtio-json-web-token.svg";
import Nodejs from "../../images/icons/Node.js_logo.svg";
import ReactQuary from "../../images/icons//react-query-seeklogo.com.svg";
// Familiar
import Docker from "../../images/icons/Docker_logo.svg";
import Bootstrap from "../../images/icons/Bootstrap_logo.svg";
import MaterialUi from "../../images/icons/material-ui-1.svg";
import D3 from "../../images/icons/d3.svg";
// Tools
import git from "../../images/icons/Git-logo.svg";
import github from "../../images/icons/Octicons-mark-github.svg";
import npm from "../../images/icons/Npm-logo.svg";
import vercel from "../../images/icons/vercel-logotype-light.svg";

export const metadata = {
  title: "skills",
  description: "showing my skill set",
};
const skillsPage = () => {
  return (
    // absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full
    <div className=" mb-20  max-w-screen-myMd mx-auto">
      <h1 className="text-center text-5xl underline mb-12">Skill Set</h1>
      <div className="text-center md:text-start">
        <Link
          className="duration-200   text-zinc-300 hover:text-zinc-100"
          href="/"
        >
          <button className="mb-12 border p-2  rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 "
            >
              <line x1="19" x2="5" y1="12" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-7">
        <div className="border p-5 rounded-lg ">
          <h2 className="text-2xl mb-5 underline">Expertise:</h2>
          <div className=" flex items-center gap-7 justify-between flex-wrap">
            <Image width={50} src={reactJs} alt={"reactJs"}></Image>

            <Image width={45} src={javascript} alt={"javascript"}></Image>

            <Image width={45} src={typescript} alt={"typescript"}></Image>
            <Image width={65} src={tailwindCSS} alt={""}></Image>
            <button className="  border p-3 text-xl   rounded-md ">
              Express js
            </button>
            <Image width={200} src={ReactRouter} alt={"ReactRouter"}></Image>
          </div>
        </div>
        <div className="border p-5 rounded-lg ">
          <h2 className="text-2xl mb-5 underline">Comfortable :</h2>
          <div className="flex items-center gap-7 flex-wrap">
            <Image width={160} src={mongodb} alt={""}></Image>
            <Image width={125} src={nextJs} alt={""}></Image>
            <Image width={100} src={Firebase} alt={""}></Image>
            <Image width={40} src={cpp} alt={""}></Image>
            <Image width={44} src={Redux} alt={""}></Image>
            <Image width={130} src={JWT} alt={""}></Image>
            <Image width={50} src={ReactQuary} alt={""}></Image>
            <Image width={80} src={Nodejs} alt={""}></Image>
          </div>
        </div>
        <div className="border p-5 rounded-lg ">
          <h3 className="text-2xl mb-5 underline">Familiar:</h3>
          <div className="flex items-center gap-7 justify-between flex-wrap">
            <Image width={140} src={Docker} alt={""}></Image>

            <Image width={55} src={Bootstrap} alt={""}></Image>
            <Image width={55} src={MaterialUi} alt={""}></Image>

            <Image width={55} src={D3} alt={""}></Image>
          </div>
        </div>
        <div className="border p-5 rounded-lg ">
          <h3 className="text-2xl mb-5 underline">Tools:</h3>
          <div className="flex items-center gap-7 justify-between flex-wrap ">
            <Image width={90} src={git} alt={""}></Image>
            <Image width={45} src={github} alt={""}></Image>
            <Image width={80} src={npm} alt={""}></Image>
            <Image width={100} src={vercel} alt={""}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skillsPage;
