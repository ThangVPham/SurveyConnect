import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
interface MobileNavPropType {
  mobileToggled: boolean;
  toggleMobileNav: () => void;
}
function MobileNav({ mobileToggled, toggleMobileNav }: MobileNavPropType) {
  return (
    <nav
      className={
        mobileToggled
          ? "block text-slate-200 absolute text-center w-full md:hidden transition-translate duration-200 top-0 bg-green-700 dark:bg-slate-900 bg-opacity-90 "
          : "block text-slate-200 absolute text-center w-full md:hidden transition-translate duration-200 top-[-400px]"
      }
    >
      <ul className="pt-16 pb-5" onClick={() => toggleMobileNav()}>
        <li>
          <Link
            to={"/"}
            className="h-10 flex justify-center items-center hover:text-green-900 hover:bg-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-300"
          >
            Home
          </Link>
          <FontAwesomeIcon
            icon={faTimes}
            fontWeight="bold"
            fontSize={36}
            className="absolute right-6 top-5 cursor-pointer hover:text-green-900 dark:hover:text-cyan-300"
            onClick={() => {
              toggleMobileNav();
            }}
          />
        </li>
        <li className="h-10 flex justify-center items-center hover:text-green-900 hover:bg-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-300">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="h-10 flex justify-center items-center hover:text-green-900 hover:bg-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-300">
          <Link to={"/pricing"}>Pricing</Link>
        </li>
        <li className="h-10 flex justify-center items-center hover:text-green-900 hover:bg-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-300">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
