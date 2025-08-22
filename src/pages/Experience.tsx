import ExperienceContent from "../components/common/ExperienceContent";
import TitleHeader from "../components/common/TitleHeader";
import { Card, CardDescription, CardHeader } from "../components/ui/card";
import { experienceDetails } from "../data/experienceDetails";

const Experience = () => {
  return (
    <Card className="bg-blue-50 rounded-lg shadow-md  ">
      <CardHeader className="sm:text-lg md:text-lg lg:text-lg sm:font-bold md:font-bold lg:font-bold  sm:bg-blue-400 md:bg-blue-400 lg:bg-blue-400 sm:w-[20vh] sm:h-[5vh] md:w-[40vh] md:h-[10vh] lg:w-[20vh] lg:h-[5vh] justify-center items-center py-2 rounded-r-lg ">
        <TitleHeader title="Experience" />
      </CardHeader>
      <CardDescription className=" font-medium h-[30vh]   overflow-y-auto">
        {experienceDetails.map((experienceDetail, index) => {
          return (
            <div key={index} >
              <ExperienceContent
                title={experienceDetail.jobTitle}
                subtitle={experienceDetail.company}
                location={experienceDetail.location}
                duration={experienceDetail.duration}
                description={experienceDetail.description}
                tags={experienceDetail.skills}
                badgeColor="bg-blue-200  rounded-md"
              />
              {index < experienceDetails.length - 1 && <hr />}
            </div>
          );
        })}
      </CardDescription>
    </Card>
  );
};

export default Experience;
