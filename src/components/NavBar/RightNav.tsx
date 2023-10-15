import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
interface RightNavPropType {
  toggleMobileNavState: boolean;
  toggleMobileNav: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: () => void;
}
function RightNav({ toggleMobileNavState, toggleMobileNav, isLoggedIn, setIsLoggedIn }: RightNavPropType) {
  return (
    <div className="  mr-5 text-center">
      {!isLoggedIn && (
        <div className="hidden md:flex gap-5 items-center mr-5 text-sm h-full">
          <Link
            to={"/"}
            className="bg-green-600 md:flex hidden justify-center px-2 py-1 rounded-3xl text-white border border-green-600 hover:text-green-600 hover:bg-slate-100  dark:bg-transparent dark:border-cyan-700 dark:hover:bg-white dark:hover:text-slate-800 text-sm transiton-bg duration-200"
            onClick={() => {
              setIsLoggedIn();
            }}
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="bg-green-600 md:flex hidden justify-center px-2 py-1 rounded-3xl text-white border border-green-600 hover:text-green-600 hover:bg-slate-100  dark:bg-transparent dark:border-cyan-700 dark:hover:bg-white dark:hover:text-slate-800 text-sm transiton-bg duration-200"
          >
            Sign Up
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <Link
          to={"/"}
          className="bg-green-600 md:flex hidden justify-center px-2 py-1 rounded-3xl text-white border border-green-600 hover:text-green-600 hover:bg-slate-100  dark:bg-transparent dark:border-cyan-700 dark:hover:bg-white dark:hover:text-slate-800 text-sm transiton-bg duration-200"
          onClick={() => {
            setIsLoggedIn();
          }}
        >
          Log Out
        </Link>
      )}

      <div
        className="mx-5 text-stone-600 dark:text-slate-200 block md:hidden hover:text-green-600 dark:hover:text-cyan-300"
        onClick={() => toggleMobileNav()}
      >
        <FontAwesomeIcon
          icon={faBars}
          fontWeight="bold"
          fontSize={36}
          className={toggleMobileNavState ? "opacity-0" : "block cursor-pointer"}
        />
      </div>
    </div>
  );
}

export default RightNav;
