import React from "react";
import { CardDescription, CardHeader, CardTitle } from "./ui/card";
import { educationDetails } from "@/data/educationDetails";

const StudyCard = () => {
  return (
    <>
      {educationDetails.map((educationDetail, index) => (
        <div key={index} className="education  ">
          <CardHeader className="sm:text-lg md:text-lg lg:text-lg sm:font-bold md:font-bold lg:font-bold   sm:w-[20vh] sm:h-[5vh] md:w-[40vh] md:h-[10vh] lg:w-[50vh] lg:h-[7vh] justify-start items-center py-2 rounded-r-lg ">
            <CardTitle className="text-lg font-semibold">
              {educationDetail.degree}{" "}
            </CardTitle>
            <CardDescription className=" font-medium ">
              {educationDetail.institution}
              {" | "} {educationDetail.fieldOfStudy}
              {" | "}
              {educationDetail.yearOfGraduation}
            </CardDescription>
          </CardHeader>
        </div>
      ))}
    </>
  );
};

export default StudyCard;
