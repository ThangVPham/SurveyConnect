import { NavLink } from "react-router-dom";
function LeftNav() {
  return (
    <div className="hidden md:flex gap-5 h-full justify-center items-center dark:text-slate-300">
      <NavLink
        to={"/"}
        className={({ isActive }) => {
          return isActive
            ? "text-green-600 border-green-600 pt-1 border-b-4 h-full flex items-center justify-center dark:text-cyan-300 dark:border-cyan-300  lg:w-16"
            : "h-full flex items-center justify-center hover:text-green-600 hover:border-b-4 border-green-600 dark:hover:border-slate-200 dark:hover:text-slate-200 lg:w-16";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => {
          return isActive
            ? "text-green-600 border-green-600 pt-1 border-b-4 h-full flex items-center justify-center dark:text-cyan-300 dark:border-cyan-300  lg:w-16"
            : "h-full flex items-center justify-center hover:text-green-600 hover:border-b-4 border-green-600 dark:hover:border-slate-200 dark:hover:text-slate-200 lg:w-16";
        }}
      >
        About
      </NavLink>
      <NavLink
        to={"/pricing"}
        className={({ isActive }) => {
          return isActive
            ? "text-green-600 border-green-600 pt-1 border-b-4 h-full flex items-center justify-center dark:text-cyan-300 dark:border-cyan-300  lg:w-16"
            : "h-full flex items-center justify-center hover:text-green-600 hover:border-b-4 border-green-600 dark:hover:border-slate-200 dark:hover:text-slate-200 lg:w-16";
        }}
      >
        Pricing
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => {
          return isActive
            ? "text-green-600 border-green-600 pt-1 border-b-4 h-full flex items-center justify-center dark:text-cyan-300 dark:border-cyan-300  lg:w-16"
            : "h-full flex items-center justify-center hover:text-green-600 hover:border-b-4 border-green-600 dark:hover:border-slate-200 dark:hover:text-slate-200 lg:w-16";
        }}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default LeftNav;
