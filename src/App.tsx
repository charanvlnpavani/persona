import "./App.css";
import ProfileDetails from "./pages/ProfileDetails";
import WorkStudy from "./pages/WorkStudy";

function App() {
  return (
    <div className="sm:flex sm:flex-col md:flex md:flex-row  lg:flex lg:flex-row h-screen  justify-center">
      <div className="flex flex-col   px-5 sm:w-[100vw] md:w-[45vw] lg:w-[20vw] sm:h-[100vh] md:h-[100vh] lg:h-[100vh]   ">
        <ProfileDetails />
      </div>
      <div className="flex flex-col py-5 px-5 sm:w-[100vw] md:w-[55vw] lg:w-[30vw] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] ">
        {/* Other components can be added here */}
        <WorkStudy />
      </div>
      <div className="flex flex-col  px-5 sm:w-[100vw] md:w-[55vw] lg:w-[30vw] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] border-2">
        {/* Other components can be added here */}
        Own Projects/ Skills
      </div>
      <div className="flex flex-col  px-5 sm:w-[100vw] md:w-[55vw] lg:w-[10vw] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] border-2">
        {/* Other components can be added here */}
        social media links resume
      </div>
    </div>
  );
}

export default App;
