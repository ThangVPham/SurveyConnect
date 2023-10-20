import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

import Dashboard from "./Pages/Dashboard";
import SurveyDetail from "./Pages/SurveyDetail";
import NavBar from "./components/NavBar/NavBar";
import NewSurvey from "./Pages/NewSurvey";

interface MainLayOutRouteProp {
  darkMode: boolean;
  setDarkMode: () => void;
  isLoggedIn: boolean;
  logOut: () => void;
}
function MainLayOutRoute({ darkMode, setDarkMode, isLoggedIn, logOut }: MainLayOutRouteProp) {
  return (
    <div className="min-h-screen overflow-hidden relative">
      <NavBar darkMode={darkMode} toggleDarkMode={setDarkMode} isLoggedIn={isLoggedIn} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/user/surveydetail/:id" element={<SurveyDetail />}></Route>
        <Route path="/surveydetail/:id" element={<SurveyDetail />}></Route>
        <Route path="/newsurvey" element={<NewSurvey />}></Route>
      </Routes>
    </div>
  );
}

export default MainLayOutRoute;
