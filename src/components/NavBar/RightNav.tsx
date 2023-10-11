import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
interface RightNavPropType {
  toggleMobileNavState: boolean;
  toggleMobileNav: () => void;
}
function RightNav({ toggleMobileNavState, toggleMobileNav }: RightNavPropType) {
  return (
    <div>
      <div className="hidden md:flex gap-5 items-center mr-5 text-sm h-full">
        <Link
          to={"/login"}
          className="bg-green-600 px-5 py-2 rounded-3xl text-white border border-green-600 hover:text-green-600 hover:bg-white  dark:bg-slate-800 dark:border-none dark:hover:bg-white dark:hover:text-slate-800"
        >
          Login
        </Link>
        <Link
          to={"/signup"}
          className="bg-green-600 px-5 py-2 rounded-3xl text-white border border-green-600 hover:text-green-600 hover:bg-white  dark:bg-slate-800 dark:border-none dark:hover:bg-white dark:hover:text-slate-800"
        >
          Sign Up
        </Link>
      </div>
      <div
        className="mx-5 text-stone-600 dark:text-slate-200 block md:hidden hover:text-green-600 dark:hover:text-cyan-300"
        onClick={() => toggleMobileNav()}
      >
        <FontAwesomeIcon
          icon={faBars}
          fontWeight="bold"
          fontSize={36}
          className={toggleMobileNavState ? "hidden" : "block cursor-pointer"}
        />
      </div>
    </div>
  );
}

export default RightNav;
