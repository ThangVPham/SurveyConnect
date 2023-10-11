import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Pricing from "./Pages/Pricing.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Contact from "./Pages/Contact.tsx";
import Login from "./Pages/Login.tsx";
import Signup from "./Pages/Signup.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import SurveyDetail from "./Pages/SurveyDetail.tsx";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-slate-900 h-screen bg-slate-200 dark:text-slate-200">
        <Router>
          <NavBar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/survey/:id" element={<SurveyDetail />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
