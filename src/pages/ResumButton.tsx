import { CommonButton } from "@/components/common/CommonButton";
import * as React from "react";

const ResumeButton: React.FC = () => {
  const handleClick = () => {
    window.open("/documents/Charan_VLN_Pavani_Frontend.pdf", "_blank");
  };

  return (
    <div className="flex  w-full py-4">
      <div className=" w-full max-w-xl ">
        <CommonButton
          onClick={handleClick}
          className="text-black w-[20vh]  hover:text-blue-500 cursor-pointer h-[5vh]  text-lg"
          titleName="Resume"
          variant="default"
        />
      </div>
    </div>
  );
};

export default ResumeButton;
