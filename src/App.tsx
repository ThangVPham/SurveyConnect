import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import Home from "./Pages/Home.tsx";
// import About from "./Pages/About.tsx";
// import Pricing from "./Pages/Pricing.tsx";
// import NavBar from "./components/NavBar/NavBar.tsx";
// import Contact from "./Pages/Contact.tsx";
// import Login from "./Pages/Login.tsx";
// import Signup from "./Pages/Signup.tsx";
// import Dashboard from "./Pages/Dashboard.tsx";
// import SurveyDetail from "./Pages/SurveyDetail.tsx";
import SurveyQuestions from "./Pages/SurveyQuestions.tsx";
import MainLayOutRoute from "./MainLayOutRoute.tsx";
import Login from "./Pages/Login.tsx";
import Signup from "./Pages/Signup.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gradient-to-tr dark:from-[#172A46] dark:via-[#0F2746] dark:to-[#11386E] bg-gradient-to-r min-h-screen bg-slate-200 dark:text-slate-200 transition-all duration-200">
        <Router>
          <Routes>
            <Route
              path="*"
              element={
                <MainLayOutRoute
                  darkMode={darkMode}
                  setDarkMode={() => setDarkMode((prevState) => !prevState)}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={() => setIsLoggedIn((prevState) => !prevState)}
                />
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/surveyform/:id" element={<SurveyQuestions />}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
