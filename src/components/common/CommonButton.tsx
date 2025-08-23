import * as React from "react";
import { Button } from "../../components/ui/button";

export interface CommonButtonProps {
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
  onClick: () => void;
  className?: string;
}

export const CommonButton: React.FC<CommonButtonProps> = ({
  logo,
  titleName,
  link,
  variant = "default",
  onClick,
  className,
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
        <Button
          variant={variant}
          className={`text-blue-950  ${className}`}
          onClick={onClick}
        >
          {content}
        </Button>
      </a>
    );
  }
  return (
    <Button
      variant={variant}
      className={`text-blue-950 ${className}`}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};
