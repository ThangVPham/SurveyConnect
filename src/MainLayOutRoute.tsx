import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import SurveyDetail from "./Pages/SurveyDetail";
import SurveyQuestions from "./Pages/SurveyQuestions";
import NavBar from "./components/NavBar/NavBar";

interface MainLayOutRouteProp {
  darkMode: boolean;
  setDarkMode: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: () => void;
}
function MainLayOutRoute({ darkMode, setDarkMode, isLoggedIn, setIsLoggedIn }: MainLayOutRouteProp) {
  return (
    <div>
      <Router>
        <NavBar
          darkMode={darkMode}
          toggleDarkMode={setDarkMode}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/surveydetail/:id" element={<SurveyDetail />}></Route>
          <Route path="/surveyform/:id" element={<SurveyQuestions />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default MainLayOutRoute;
