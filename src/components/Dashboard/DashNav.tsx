import React, { useState } from "react";
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
      <div className="sm:my-auto  w-full lg:w-64 my-5">
        <input
          type="text"
          className=" h-8 w-full lg:w-64  bg-stone-100 rounded-2xl px-4 dark:bg-slate-700 outline-none "
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default DashNav;
