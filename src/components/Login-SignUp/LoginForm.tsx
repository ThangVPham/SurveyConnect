import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function LoginForm() {
  return (
    <div className="w-96 xl:w-1/4 flex flex-col h-5/7 border-transparet rounded-2xl p-10 dark:bg-[#172A46] shadow-2xl bg-green-700 text-sky-100   mx-auto mt-32 ">
      <form action="" className="flex flex-col w-full gap-2 bg-opacity-10">
        <p className="text-end  text-sm">
          Don't have an account yet?{" "}
          <Link to="/signup" className="text-sky-500 hover:cursor-pointer m-0 p-0">
            Sign Up Here
          </Link>
        </p>

        <h1 className="text-2xl py-3 ">Log In</h1>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-md  mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-transparent rounded-xl outline-0 p-2 h-9 mb-3 text-slate-900"
            placeholder="example@email.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-md mb-2">
            Password
          </label>
          <div className="flex w-full">
            <input
              type="password"
              name="password"
              id="password"
              className="border-transparent rounded-l-xl outline-0 p-2 h-9 mb-3 w-11/12 text-slate-900"
              placeholder="password"
            />
            <button
              style={{ backgroundColor: "#E8F0FE", color: "#1A2629" }}
              type="button"
              className="bg-white rounded-r-xl outline-0 p-2 h-9 mb-3"
            >
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className="flex gap-1 mb-3">
          <input type="checkbox" id="termsOfUse" className="w-7" />
          <label htmlFor="termsOfUse" className="text-sm ">
            Remember Me
          </label>
        </div>
        <div className="w-full bg-zinc-900/75 h-10  flex justify-center items-center hover:cursor-pointer">
          <span>Log In</span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
