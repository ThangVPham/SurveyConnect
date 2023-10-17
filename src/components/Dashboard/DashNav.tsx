import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
function DashNav() {
  const [currentTab, setCurrentTab] = useState<string>("All");
  return (
    <div className="block sm:flex sm:justify-between gap-5 mt-10">
      <div className="flex gap-5 h-10">
        <button
          value="All"
          onClick={(e) => {
            const button = e.target as HTMLButtonElement;
            setCurrentTab(button.value);
          }}
          className={
            "h-full w-16 pt-1 hover:text-green-600 hover:dark:text-cyan-300 " +
            (currentTab === "All" ? "border-t-2 border-green-600 dark:border-slate-200" : "")
          }
        >
          All
        </button>
        <button
          value="Active"
          onClick={(e) => {
            const button = e.target as HTMLButtonElement;
            setCurrentTab(button.value);
          }}
          className={
            "h-full w-16 pt-1 hover:text-green-600 hover:dark:text-cyan-300 " +
            (currentTab === "Active" ? "border-t-2 border-green-600 dark:border-slate-200" : "")
          }
        >
          Active
        </button>
        <button
          value="Expired"
          onClick={(e) => {
            const button = e.target as HTMLButtonElement;
            setCurrentTab(button.value);
          }}
          className={
            "h-full w-16 pt-1 hover:text-green-600 hover:dark:text-cyan-300 " +
            (currentTab === "Expired" ? "border-t-2 border-green-600 dark:border-slate-200" : "")
          }
        >
          Expired
        </button>
      </div>
      <div className="flex justify-between md:justify-end md:items-center w-full gap-2 lg:gap-10 py-2 hover:">
        <Link
          to={"/newsurvey"}
          className="text-xs lg:text-sm border border-1 border-green-600 dark:border-cyan-700 py-2 px-1 rounded-3xl w-24 lg:w-32 text-center flex justify-center items-center hover:cursor-pointer bg-green-600 dark:bg-transparent transition-bg duration-300 text-white  hover:font-medium  hover:text-green-700 dark:hover:text-slate-900 dark:hover:bg-white hover:bg-white"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2 hidden lg:block"></FontAwesomeIcon>New Survey
        </Link>
        <input
          type="text"
          className=" h-8 w-3/4 lg:w-64  bg-stone-100 rounded-2xl px-4 dark:bg-slate-700 outline-none col-span-4"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default DashNav;
