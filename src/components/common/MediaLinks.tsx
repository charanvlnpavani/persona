import { socialMediaDetails } from "../../data/socialMedia";
import { Card, CardHeader } from "../ui/card";
import { CommonBadge } from "./CommonBadge";
import TitleHeader from "./TitleHeader";

const MediaLinks = () => {
  return (
    <Card className="flex  text-center bg-cyan-50 ">
      <CardHeader className="sm:text-md md:text-md lg:text-md  sm:font-bold md:font-bold lg:font-bold sm:bg-cyan-500 md:bg-cyan-400 lg:bg-cyan-400 sm:w-[20vh] sm:h-[5vh] md:w-[40vh] md:h-[10vh] lg:w-[20vh] lg:h-[5vh] justify-center items-center py-2 rounded-r-lg">
        <TitleHeader title="Social Media" />
      </CardHeader>
      <div className="flex flex-wrap justify-center items-center p-4 h-[20vh] overflow-y-auto">
        {socialMediaDetails.map((socialMedia) => (
          <a
            key={socialMedia.platform}
            href={socialMedia.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:underline "
          >
            <CommonBadge
              title={socialMedia.platform}
              color="bg-cyan-100 text-cyan-500"
            />
          </a>
        ))}
      </div>
    </Card>
  );
};

export default MediaLinks;
