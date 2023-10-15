import { useState } from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import SurveyConnectLogo from "./SurveyConnectLogo";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import MobileNav from "./MobileNav";
interface DarkModeType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: () => void;
}
function NavBar({ darkMode, toggleDarkMode, isLoggedIn, setIsLoggedIn }: DarkModeType) {
  const [toggleMobileNavState, setToggleMobileNavState] = useState(false);
  return (
    <nav className="flex justify-between items-center h-16 shadow-2xl gap-5  dark:bg-[#121f3a] ">
      <SurveyConnectLogo darkMode={darkMode} />
      <LeftNav isLoggedIn={isLoggedIn} />

      <div className="flex gap-5">
        <ToggleDarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <RightNav
          toggleMobileNavState={toggleMobileNavState}
          toggleMobileNav={() => {
            setToggleMobileNavState(!toggleMobileNavState);
          }}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={() => setIsLoggedIn()}
        />
      </div>
      <MobileNav
        mobileToggled={toggleMobileNavState}
        toggleMobileNav={() => {
          setToggleMobileNavState(!toggleMobileNavState);
        }}
        isLoggedIn={isLoggedIn}
      />
    </nav>
  );
}

export default NavBar;
