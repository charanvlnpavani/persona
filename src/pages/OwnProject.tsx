import TitleHeader from "../components/common/TitleHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../components/ui/card";
import { projects } from "../data/projects";
import ItemContent from "../components/common/ExperienceContent";

const OwnProject = () => {
  return (
    <Card className="bg-teal-50 w-full max-w-2xl mx-auto">
      <CardHeader className="text-lg font-bold bg-teal-500 py-2 rounded-r-lg flex justify-center items-center w-[20vh]">
        <TitleHeader title="Projects" />
      </CardHeader>
      <CardContent>
        <CardDescription className="bg-teal-50 font-medium max-h-[30vh] overflow-y-auto">
          {projects.map((project, index) => (
            <>
              <div key={index} className="mb-4 ">
                <ItemContent
                  title={project.title}
                  location={project.subtitle}
                  duration={project.duration}
                  description={project.description}
                  tags={project.technologies}
                  badgeColor="bg-teal-400 text-white"
                  link={project.link}
                />
                {index < projects.length - 1 && <hr />}
              </div>
            </>
          ))}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default OwnProject;
