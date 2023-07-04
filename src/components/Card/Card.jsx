import Image from "next/image";
import Link from "next/link";

const Card = ({ photo, name, features, technologies }) => {
  //   console.log(features);
  return (
    <div className="border p-5 rounded-lg shadow-lg">
      <Image
        className="rounded-lg"
        width={350}
        src={photo}
        alt="project card photo"
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
      <div className="flex justify-between mt-5">
        <Link href={""}>
          <button className="border p-3 rounded-md">Live Site</button>
        </Link>
        <Link href={""}>
          <button className="border p-3 rounded-md">Client repo</button>
        </Link>
        <Link href={""}>
          <button className="border p-3 rounded-md">Server repo</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
