import { CommonButton } from "@/components/common/CommonButton";
import * as React from "react";

const ResumeButton: React.FC = () => {
  const handleClick = () => {
    window.open("/Charan VLN Pavani_Frontend.pdf", "_blank");
  };

  return (
    <div className="flex justify-center items-center w-full py-4">
      <div className=" w-full max-w-xl   ">
        <CommonButton
          onClick={handleClick}
          className="text-black w-full cursor-pointer h-[10vh] text-2xl"
          titleName="Resume"
          variant="default"
        />
      </div>
    </div>
  );
};

export default ResumeButton;
