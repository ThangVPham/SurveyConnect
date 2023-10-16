import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

import Dashboard from "./Pages/Dashboard";
import SurveyDetail from "./Pages/SurveyDetail";
// import SurveyQuestions from "./Pages/SurveyQuestions";
import NavBar from "./components/NavBar/NavBar";

interface MainLayOutRouteProp {
  darkMode: boolean;
  setDarkMode: () => void;
  isLoggedIn: boolean;
  logOut: () => void;
}
function MainLayOutRoute({ darkMode, setDarkMode, isLoggedIn, logOut }: MainLayOutRouteProp) {
  return (
    <div className="h-screen overflow-hidden relative">
      <NavBar darkMode={darkMode} toggleDarkMode={setDarkMode} isLoggedIn={isLoggedIn} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/surveydetail/:id" element={<SurveyDetail />}></Route>
      </Routes>
    </div>
  );
}

export default MainLayOutRoute;
