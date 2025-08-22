import "./App.css";
import MediaLinks from "./components/common/MediaLinks";
import Experience from "./pages/Experience";
import OwnProject from "./pages/OwnProject";
import ProfileDetails from "./pages/ProfileDetails";
import SkillsList from "./pages/SkillsList";
import WorkStudy from "./pages/WorkStudy";

function App() {
  return (
    <div className="sm:flex sm:flex-col md:flex md:flex-row  lg:flex lg:flex-row h-screen  justify-center  bg-gray-100">
      <div className="flex flex-col   px-5 sm:w-[100vw] md:w-[45vw] lg:w-[20vw] sm:h-[100vh] md:h-[100vh] lg:h-[100vh]   ">
        <ProfileDetails />
      </div>
      <div className="flex flex-col py-5 px-5 sm:w-[100vw] md:w-[55vw] lg:w-[25vw] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] gap-5">
        <WorkStudy />
        <Experience />
      </div>
      <div className="flex flex-col py-5 px-5 sm:w-[100vw] md:w-[55vw] lg:w-[30vw] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] gap-5 ">
        <SkillsList />
        <OwnProject />
      </div>
      <div className="flex flex-col  p-5 sm:w-[100vw] md:w-[55vw] lg:w-[20vw] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] ">
        <MediaLinks />
      </div>
    </div>
  );
}

export default App;
