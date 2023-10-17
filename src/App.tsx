import "./App.css";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import { useState } from "react";
import SurveyQuestions from "./Pages/SurveyQuestions.tsx";
import MainLayOutRoute from "./MainLayOutRoute.tsx";
import Login from "./Pages/Login.tsx";
import Signup from "./Pages/Signup.tsx";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const loginToken = localStorage.getItem("token");
    return loginToken ? true : false;
  });
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gradient-to-tr dark:from-[#172A46] dark:via-[#0F2746] dark:to-[#11386E] bg-gradient-to-r min-h-screen bg-slate-200 dark:text-slate-200 transition-all duration-200">
        <HashRouter>
          <Routes>
            <Route
              path="*"
              element={
                <MainLayOutRoute
                  darkMode={darkMode}
                  setDarkMode={() => setDarkMode((prevState) => !prevState)}
                  isLoggedIn={isLoggedIn}
                  logOut={() => {
                    console.log("logout");
                    setIsLoggedIn(false);
                    localStorage.removeItem("token");
                  }}
                />
              }
            ></Route>
            <Route path="/login" element={<Login setLogIn={() => setIsLoggedIn(true)} />}></Route>
            <Route path="/signup" element={<Signup setLogIn={() => setIsLoggedIn(true)} />}></Route>
            <Route path="/surveyform/:id" element={<SurveyQuestions />}></Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
