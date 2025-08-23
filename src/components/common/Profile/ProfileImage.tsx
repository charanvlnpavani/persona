import { Card, CardHeader, CardTitle } from "../../ui/card";
import ProfileContent from "./ProfileContent"; // Importing ProfileContent from ProfileList
import { profileDetails } from "../../../data/profileDetails";

const ProfileImage = () => {
  return (
    <div className="profile-details flex flex-col md:flex-row  py-5 px-2">
      {profileDetails.map((profile, index) => (
        <Card
          className="w-full max-w-sm mx-auto shadow-lg bg-gray-50 "
          key={index}
        >
          <CardHeader className="flex flex-col items-center">
            <img
              src={profile.image}
              alt="Profile"
              className="w-50 h-50 rounded-full mb-2 object-cover border-2 border-yellow-400"
            />
            <CardTitle className="text-2xl font-bold text-center">
              {profile.name}
            </CardTitle>
            <span className="text-sm text-gray-500 text-center">
              {profile.role}
            </span>
          </CardHeader>{" "}
          <ProfileContent profile={profile} />
        </Card>
      ))}
    </div>
  );
};

export default ProfileImage;
