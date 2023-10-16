import { useState } from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import SurveyConnectLogo from "./SurveyConnectLogo";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import MobileNav from "./MobileNav";
interface INavBar {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isLoggedIn: boolean;
  logOut: () => void;
}
function NavBar({ darkMode, toggleDarkMode, isLoggedIn, logOut }: INavBar) {
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
          logOut={logOut}
        />
      </div>
      <MobileNav
        mobileToggled={toggleMobileNavState}
        toggleMobileNav={() => {
          setToggleMobileNavState(!toggleMobileNavState);
        }}
        logOut={logOut}
        isLoggedIn={isLoggedIn}
      />
    </nav>
  );
}

export default NavBar;
