import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Badge } from "../../components/ui/badge";

interface ItemContentProps {
  title: string;
  subtitle?: string;
  location?: string;
  duration?: string;
  description?: string;
  tags?: string[];
  badgeColor?: string;
  link?: string;
}

const ItemContent: React.FC<ItemContentProps> = ({
  title,
  subtitle,
  location,
  duration,
  description,
  tags,
  badgeColor,
  link,
}) => {
  return (
    <div className="item-content px-5 w-full pb-1 flex flex-col ">
      <Dialog>
        <DialogTrigger>
          <div className="flex flex-col justify-between items-start cursor-pointer  ">
            <div className="flex items-center gap-2 py-3 ">
              <span className="text-md text-black font-bold">{title}</span>
              {subtitle && (
                <span className="text-sm text-gray-700 font-semibold ml-2">
                  {subtitle}
                </span>
              )}
            </div>
            {(location || duration) && (
              <div className="text-sm text-gray-500 font-light flex justify-between w-full">
                <div>{location}</div>
                <div>{duration}</div>
              </div>
            )}
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {title}
              {subtitle && (
                <span className="text-sm text-gray-700 font-semibold ml-2">
                  {subtitle}
                </span>
              )}
              {(location || duration) && (
                <span className="text-sm text-gray-500">
                  <br /> {location} {duration ? `(${duration})` : ""}
                </span>
              )}
            </DialogTitle>
          </DialogHeader>
          {description && <DialogDescription>{description}</DialogDescription>}
          {(tags && tags.length > 0) || link ? (
            <DialogFooter className="flex gap-2 items-center">
              {tags && tags.length > 0 && (
                <Badge
                  className={
                    badgeColor +
                    " px-3 py-2 flex items-center gap-1 rounded-full"
                  }
                >
                  {tags.join(", ")}
                </Badge>
              )}
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition text-sm cursor-pointer">
                    View
                  </button>
                </a>
              )}
            </DialogFooter>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ItemContent;
