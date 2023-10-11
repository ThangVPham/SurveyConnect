import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="block my-20 w-full md:flex  md:justify-center md:items-center  ">
      <div className="w-4/5 mx-auto md:mx-0 md:w-1/3 flex flex-col items-center gap-8 md:gap-10 text-center pb-8 dark:text-slate-300">
        <h3 className="text-xl text-green-600 font-medium dark:text-cyan-400">Build, Create, Connect</h3>
        <h1 className="text-5xl font-semibold">Ask the questions that matter!</h1>
        <p>Connect with your customers. Get the answers you need with Survey Connect.</p>
        <div className="flex gap-5">
          <Link
            to="/dashboard"
            className="bg-green-600 px-5 py-2 rounded-3xl text-xs h-full my-auto text-white dark:text-slate-300 border border-green-600  hover:text-green-600 hover:bg-white dark:bg-slate-800 dark:border-none dark:hover:bg-slate-100 dark:hover:text-slate-800 lg:text-base "
          >
            Get Started
          </Link>
          <Link
            to=""
            className="bg-green-600 px-5 py-2 rounded-3xl text-xs h-full my-auto text-white dark:text-slate-300 border border-green-600  hover:text-green-600 hover:bg-white dark:bg-slate-800 dark:border-none dark:hover:bg-slate-100 dark:hover:text-slate-800 lg:text-base "
          >
            Take Survey
          </Link>
        </div>
      </div>
      <div className="w-1/2 xl:w-1/4 md:ml-10 mx-auto md:mx-0 ">
        <img src="../../public/boy-with-book.png" alt="" className="w-full ml-10" />
      </div>
    </div>
  );
}

export default Home;