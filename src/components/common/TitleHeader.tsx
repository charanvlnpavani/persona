import React from "react";

interface TitleProps {
  title: string;
}

const TitleHeader: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <h1 className=" font-bold text-center ">{title}</h1>
    </>
  );
};

export default TitleHeader;
