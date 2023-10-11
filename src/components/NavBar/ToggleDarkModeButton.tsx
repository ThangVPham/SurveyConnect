interface DarkModeType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
function ToggleDarkModeButton({ darkMode, toggleDarkMode }: DarkModeType) {
  return (
    <div
      className=" items-center relative hidden md:flex"
      onClick={() => {
        toggleDarkMode();
      }}
    >
      <div className="w-[40px]  h-[20px] bg-green-600 rounded-xl dark:bg-cyan-700 transition-bg duration-200"></div>
      <div
        className={
          darkMode
            ? " w-[20px] h-[20px] rounded-full bg-slate-300  absolute translate-x-5 transition-translate duration-100"
            : " w-[20px] h-[20px] rounded-full bg-slate-300   absolute translate-x-0 transition-translate duration-100"
        }
      ></div>
    </div>
  );
}

export default ToggleDarkModeButton;
