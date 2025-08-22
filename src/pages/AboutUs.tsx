import { aboutDetails } from "../data/about";
import { Card, CardDescription, CardHeader } from "../components/ui/card";
import TitleHeader from "../components/common/TitleHeader";

const AboutUs = () => {
  return (
    <Card className="about-us bg-green-50 rounded-lg shadow-md">
      <CardHeader className="sm:text-lg md:text-lg lg:text-lg sm:font-bold md:font-bold lg:font-bold  sm:bg-green-400 md:bg-green-400 lg:bg-green-400 sm:w-[20vh] sm:h-[5vh] md:w-[40vh] md:h-[10vh] lg:w-[20vh] lg:h-[5vh] justify-center items-center py-2 rounded-r-lg ">
        <TitleHeader title={aboutDetails.title} />
      </CardHeader>
      <CardDescription className="px-5 font-medium ">
        {aboutDetails.description}
      </CardDescription>
    </Card>
  );
};

export default AboutUs;
