import "./App.css";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  return (
    <div>
      <div className="flex flex-col   px-5 sm:w-[100vw] md:w-[45vw] lg:w-[20vw] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] border-2   ">
        <ProfileDetails />
      </div>
    </div>
  );
}

export default App;
