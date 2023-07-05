import Image from "next/image";
import Link from "next/link";

const Card = ({ project }) => {
  //   console.log(features);

  const {
    thumbnail,
    name,
    features,
    technologies,
    liveSite,
    clientRepo,
    serverRepo,
  } = project;
  return (
    <div className="border p-5 rounded-lg shadow-lg ">
      <div className="">
        <Image
          className="rounded-lg"
          width={450}
          height={350}
          src={thumbnail}
          alt=""
        ></Image>
        <div className="mt-7">
          <h3 className="text-xl mb-3">{name}</h3>
          <h4 className=" underline mb-2">Features:</h4>
          <ul>
            {features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h4 className="mt-5 underline mb-2">Key Technologies Used:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {technologies?.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" ">
        <div className="flex justify-between mt-5">
          <Link target="_blank" href={liveSite}>
            <button className="border p-3 rounded-md hover:scale-105 transition duration-300 hover:border-green-400  hover:text-green-400">
              Live Site
            </button>
          </Link>
          <Link target="_blank" href={clientRepo}>
            <button className="border p-3 rounded-md hover:scale-105 transition duration-300 hover:border-green-400  hover:text-green-400">
              Client repo
            </button>
          </Link>
          <Link target="_blank" href={serverRepo}>
            <button className="border p-3 rounded-md hover:scale-105 transition duration-300 hover:border-green-400  hover:text-green-400">
              Server repo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
