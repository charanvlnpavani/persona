import { aboutDetails } from "@/data/about";
import { Card, CardDescription, CardHeader } from "../components/ui/card";

const AboutUs = () => {
  return (
    <>
      <Card className="about-us bg-gray-50 rounded-lg shadow-md">
        <CardHeader className="text-lg font-bold">
          {aboutDetails.title}
        </CardHeader>
        <CardDescription className="px-5 font-medium">
          {aboutDetails.description}
        </CardDescription>
      </Card>
    </>
  );
};

export default AboutUs;
