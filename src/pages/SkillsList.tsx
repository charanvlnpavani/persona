import { CommonBadge } from "@/components/common/CommonBadge";
import TitleHeader from "@/components/common/TitleHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skillsList } from "@/data/skillsList";
import React from "react";

// Example skillsList object

const SkillsList = () => {
  return (
    <Card className="skills-list bg-yellow-50 rounded-lg shadow-md ">
      <CardHeader className="sm:text-lg md:text-lg lg:text-lg sm:font-bold md:font-bold lg:font-bold  sm:bg-yellow-400 md:bg-yellow-400 lg:bg-yellow-400 sm:w-[20vh] sm:h-[5vh] md:w-[40vh] md:h-[10vh] lg:w-[20vh] lg:h-[5vh] justify-center items-center py-2 rounded-r-lg ">
        <TitleHeader title="Skills" />
      </CardHeader>

      <CardContent className="flex flex-wrap justify-start items-center p-4 h-[20vh] overflow--y-auto">
        {Object.values(skillsList)
          .flat()
          .map((skill: string, index: number) => (
            <CommonBadge key={index} title={skill} />
          ))}
      </CardContent>
    </Card>
  );
};

export default SkillsList;
