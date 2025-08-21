import detailsImage from "../assets/images/details.png";

export interface ProfileDetails {
  name: string;
  role: string;
  phone: string;
  location: string;
  image: string;
}

export const profileDetails: ProfileDetails[] = [
  {
    name: "Charan VLN Pavani",
    role: "Software Developer (SDE - 1) ",
    phone: "+91 9963046104",
    location: "Bangalore, India",
    image: detailsImage, // Use imported image
  },
];
