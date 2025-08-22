import * as React from "react";
import { Badge } from "../../components/ui/badge";
import TitleHeader from "./TitleHeader";

interface CommonBadgeProps {
  logo?: React.ReactNode;
  title: string;
  color?: string; // Optional for custom color
}

export const CommonBadge: React.FC<CommonBadgeProps> = ({
  logo,
  title,
  color,
}) => (
  <Badge
    className={
      " items-center m-2 px-4 py-2  rounded-full shadow  " +
      (color ? color : "bg-yellow-500 text-black")
    }
  >
    {logo && (
      <span className="w-6 h-6 flex items-center justify-center ">{logo}</span>
    )}
    <span>
      <TitleHeader title={title} />
    </span>
  </Badge>
);
