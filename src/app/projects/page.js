import Card from "@/components/Card/Card";
import musicShalaPhoto from "../../images/music-shala.png";
import recipeHunterPhoto from "../../images/recipe-hunter.png";
import toyBariPhoto from "../../images/toy-bari.png";
import Link from "next/link";
// import projectsData from "../../data/projectsData/projectsData";
const projectsData = [
  {
    id: 1,
    name: "Music Shala",
    thumbnail: "https://i.ibb.co/4YZr7yw/music-shala.png",
    liveSite: "https://music-shala.web.app/",
    clientRepo: "https://github.com/masudrahman-dev/music-shala-client.git",
    serverRepo: "https://github.com/masudrahman-dev/music-shala-server.git",
    features: [
      "CURD operation",
      "api secure by JWT",
      "firebase Authentication",
    ],
    technologies: [
      "React js",
      "Express js",
      "MongoDB",
      "React Query",
      "React Router",
      "Tailwind CSS",
      "JWT",
      "Axios js",
    ],
  },
  {
    id: 2,
    name: "Toy Bari",
    thumbnail: "https://i.ibb.co/mXydyLy/toy-bari.png",
    liveSite: "",
    clientRepo: "https://github.com/masudrahman-dev/toy-marketplace-client.git",
    serverRepo: "https://github.com/masudrahman-dev/toy-marketplace-server.git",
    features: [
      "Add Toys dynamically from dashboard",
      "Anyone can create account and sell toys",
      "sorting system by name and low to high price",
    ],
    technologies: [
      "React hook form",
      "React js",
      "Express js",
      "MongoDB",
      "React Router",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    name: "Recipe Hunter",
    thumbnail: "https://i.ibb.co/tBvmr67/recipe-hunter.png",

    liveSite: "https://recepi-hunter-client.web.app/",
    clientRepo:
      "https://github.com/masudrahman-dev/chef-recipe-hunter-client/tree/main/recepi-hunter-client",
    serverRepo:
      "https://github.com/masudrahman-dev/chef-recipe-hunter-server.git",
    features: [
      "Dynamically Routing",
      "firebase Authentication & makes private routes",
      "show details by id & select favorite recipe",
    ],
    technologies: [
      "javascript",
      "React js",
      "React Router",
      "Firebase",
      "Tailwind CSS",
    ],
  },
  {
    id: 4,
    name: "My Portfolio",
    thumbnail: "https://i.ibb.co/x8bd2b8/profile-png-2-png.png",
    liveSite: "https://github.com/masudrahman-dev/portfolio.git",
    clientRepo: "https://github.com/masudrahman-dev/portfolio.git",
    serverRepo: "https://github.com/masudrahman-dev/portfolio.git",
    features: [
      "SEO Friendly",
      "Server side rendering",
      "Download Resume By click",
    ],
    technologies: ["Next js", "React js", "javascript js", "Tailwind CSS"],
  },
];
export const metadata = {
  title: "Projects",
  description: "showing my projects",
};

const projectsPage = () => {
  return (
    <div className="max-w-screen-myMd mx-auto">
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-6 h-6 "
            >
              <line x1="19" x2="5" y1="12" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        </Link>
      </div>
      <div className="  flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
          {projectsData.map((project) => (
            <Card key={project.id} project={project}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projectsPage;
