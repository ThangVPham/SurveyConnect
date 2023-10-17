import { Link } from "react-router-dom";
interface DarkModeType {
  darkMode: boolean;
}
function SurveyConnectLogo({ darkMode }: DarkModeType) {
  return (
    <Link to="/" className="xl:w-1/2 lg:w-2/5 ml-5">
      <img src={darkMode ? "./assets/SCWhite.svg" : "./assets/SC.svg"} alt="Survey Connect Logo" />
    </Link>
  );
}

export default SurveyConnectLogo;
