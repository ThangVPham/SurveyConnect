import { useState } from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import SurveyConnectLogo from "./SurveyConnectLogo";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import MobileNav from "./MobileNav";
interface DarkModeType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
function NavBar({ darkMode, toggleDarkMode }: DarkModeType) {
  const [toggleMobileNavState, setToggleMobileNavState] = useState(false);

  return (
    <nav className="flex justify-between items-center h-20 shadow-2xl gap-5 dark:bg-slate-800">
      <SurveyConnectLogo darkMode={darkMode} />
      <LeftNav />
      <div className="flex gap-5">
        <ToggleDarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <RightNav
          toggleMobileNavState={toggleMobileNavState}
          toggleMobileNav={() => {
            setToggleMobileNavState(!toggleMobileNavState);
          }}
        />
      </div>
      <MobileNav
        mobileToggled={toggleMobileNavState}
        toggleMobileNav={() => {
          setToggleMobileNavState(!toggleMobileNavState);
        }}
      />
    </nav>
  );
}

export default NavBar;
