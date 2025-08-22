import * as React from "react";
import { Button } from "../../components/ui/button";

interface CommonButtonProps {
  logo?: React.ReactNode;
  titleName: string;
  link?: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  onClick?: () => void;
}

export const CommonButton: React.FC<CommonButtonProps> = ({
  logo,
  titleName,
  link,
  variant = "default",
  onClick,
}) => {
  const content = (
    <span className="flex items-center gap-2">
      {logo && (
        <span className="w-5 h-5 flex items-center justify-center">{logo}</span>
      )}
      <span>{titleName}</span>
    </span>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button variant={variant} onClick={onClick}>
          {content}
        </Button>
      </a>
    );
  }
  return (
    <Button variant={variant} onClick={onClick}>
      {content}
    </Button>
  );
};
