import TitleHeader from "@/components/common/TitleHeader";
import StudyCard from "@/components/StudyCard";
import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

const WorkStudy = () => {
  return (
    <Card className="work-study bg-red-50 rounded-lg shadow-md ">
      <CardHeader className="sm:text-lg md:text-lg lg:text-lg sm:font-bold md:font-bold lg:font-bold  sm:bg-red-400 md:bg-red-400 lg:bg-red-400 sm:w-[20vh] sm:h-[5vh] md:w-[40vh] md:h-[10vh] lg:w-[20vh] lg:h-[5vh] justify-center items-center py-2 rounded-r-lg ">
        <TitleHeader title="Work & Study" />
      </CardHeader>

      <StudyCard />
    </Card>
  );
};

export default WorkStudy;
