import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LOGIN_API } from "../../API/Api";
interface ILoginInfo {
  email: string;
  password: string;
}
interface ILoginForm {
  setLogIn: () => void;
}
// const LOGIN_API = "http://localhost:5000/api/user/login";
function LoginForm({ setLogIn }: ILoginForm) {
  const [loading, setLoading] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({ email: "", password: "" });
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const navigate = useNavigate();
  // const controller = new AbortController();
  function clearMsg() {
    setTimeout(() => {
      setMsg(null);
    }, 4000);
  }
  // useEffect(() => {
  //   return () => {
  //     console.log("Aborting Fetch");
  //     controller.abort();
  //   };
  // }, []);
  async function SubmitLogin(e: React.SyntheticEvent) {
    e.preventDefault();
    const content = JSON.stringify(loginInfo);
    try {
      setLoading(true);
      const response = await fetch(LOGIN_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: content,
      });

      const data = await response.json();
      setLoading(false);
      if (response.status === 400) {
        setMsg(data.message);
        clearMsg();
      } else if (response.status === 200) {
        localStorage.setItem("token", data.token);
        setSuccess(true);
        setMsg(data.message);
        setTimeout(() => {
          setLogIn();
          navigate("/dashboard");
        }, 1500);
      } else {
        setMsg(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className=" flex flex-col relative">
      <div className=" flex justify-center items-centers mt-12 h-24">
        <img src="./assets/SCWhite.svg" alt="Survey Connect logo" />
      </div>
      <div className="w-11/12 sm:w-96 xl:w-1/4 flex flex-col border-transparet rounded-2xl p-10 dark:bg-[#172A46] shadow-2xl bg-slate-900/50 text-sky-100 mx-auto  relative pt-20 overflow-hidden">
        <div
          className={
            msg
              ? "absolute top-5 left-12 w-4/5 text-xs 2xl:w-5/6 2xl:text-base transition-all duration-500"
              : "absolute top-5 left-[800px] w-5/6  transition-all  duration-500 overflow-hidden"
          }
        >
          <div
            className={
              success
                ? "flex items-center  border-l-4   py-2 px-3 shadow-md mb-2 bg-green-700 "
                : "flex items-center  border-l-4   py-2 px-3 shadow-md mb-2 bg-[#972a2a] border-red-500"
            }
          >
            <div
              className={
                success ? "text-green-600 rounded-full bg-white mr-3 " : " rounded-full bg-white mr-3 text-red-700"
              }
            >
              <svg
                width="1.8em"
                height="1.8em"
                viewBox="0 0 16 16"
                className="bi bi-check"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                />
              </svg>
            </div>
            <div className="text-white max-w-xs ">{msg}</div>
          </div>
        </div>

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
              value={loginInfo.email}
              onChange={(e) => {
                setLoginInfo((prevState) => {
                  return { ...prevState, email: e.target.value };
                });
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-md mb-2">
              Password
            </label>
            <div className="flex w-full">
              <input
                type={revealPassword ? "text" : "password"}
                name="password"
                id="password"
                className="border-transparent rounded-l-xl outline-0 p-2 h-9 mb-3 w-11/12 text-slate-900"
                placeholder="password"
                value={loginInfo.password}
                onChange={(e) => {
                  setLoginInfo((prevState) => {
                    return { ...prevState, password: e.target.value };
                  });
                }}
              />
              <div
                style={{ backgroundColor: "#E8F0FE", color: "#1A2629" }}
                className="bg-white rounded-r-xl outline-0 p-2 h-9 mb-3"
                onClick={() => {
                  setRevealPassword(!revealPassword);
                }}
              >
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
            <input type="checkbox" id="termsOfUse" className="w-7" />
            <label htmlFor="termsOfUse" className="text-sm ">
              Remember Me
            </label>
          </div>
          <button
            type="button"
            className="w-full bg-zinc-900/75 h-10  flex justify-center items-center hover:cursor-pointer"
            onClick={(e) => SubmitLogin(e)}
          >
            {loading ? (
              <img src="./assets/loading-gif.gif" className="w-[25px]" alt="loading"></img>
            ) : (
              <span>Log In</span>
            )}
          </button>
          <div>
            <Link to={"/"} className="flex flex-col justify-center mt-3">
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
