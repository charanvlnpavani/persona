import React from "react";
import { CardContent } from "../../ui/card";

interface Profile {
  phone: string;
  location: string;
}

interface ProfileContentProps {
  profile: Profile;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ profile }) => {
  return (
    <div className="bg-gray-50 rounded-none border-0 justify-center align-center  ">
      <CardContent>
        <p className="text-gray-700  text-center">
          <span className="font-bold">Phone:</span> {profile.phone}
        </p>
        <p className="text-gray-700 text-center">
          <span className="font-bold">Location:</span> {profile.location}
        </p>
      </CardContent>
    </div>
  );
};

export default ProfileContent;
