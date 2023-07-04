import Card from "@/components/Card/Card";
import musicShalaPhoto from "../../images/music-shala.png";
import recipeHunterPhoto from "../../images/recipe-hunter.png";
import toyBariPhoto from "../../images/toy-bari.png";
const projectsPage = () => {
  const features = [
    "CURD operation",
    "api secure by JWT",
    "firebase Authentication",
  ];
  const technologies = [
    "React js",
    "Express js",
    "MongoDB",
    "React Query",
    "React Router",
    "Tailwind CSS",
  ];
  return (
    <div className="">
      <div className="  flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card
            photo={musicShalaPhoto}
            name={"Masic Shala"}
            features={features}
            technologies={technologies}
          ></Card>
          <Card photo={recipeHunterPhoto}></Card>
          <Card photo={toyBariPhoto}></Card>
        </div>
      </div>
    </div>
  );
};

export default projectsPage;
