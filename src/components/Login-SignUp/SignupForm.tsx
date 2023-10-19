import { Link } from "react-router-dom";
import { faEye, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { REGISTER_API } from "../../API/Api";
interface ISignupForm {
  setLogIn: () => void;
}
const emailRegex =
  /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

// const REGISTER_API = "http://localhost:5000/api/user/register";
function SignupForm({ setLogIn }: ISignupForm) {
  const [passwordReveal, setPasswordReveal] = useState({ password: false, confirmPassword: false });
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "", confirmPassword: "", termsOfUse: false });
  // const navigate = useNavigate();
  function clearMsg() {
    setTimeout(() => {
      setMsg(null);
    }, 4000);
  }
  async function onSubmitForm(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!userInfo.termsOfUse) {
      setMsg("You must agree to our terms of service to continue.");
      clearMsg();
      return;
    }
    if (!(userInfo.password === userInfo.confirmPassword)) {
      setMsg("Passwords are not matched");
      clearMsg();
      return;
    }
    const { email, password } = userInfo;
    const regexPass = emailRegex.test(email);
    if (!regexPass) {
      setMsg("Invalid email. Please try again.");
      clearMsg();
      return;
    }
    if (password.length < 5) {
      setMsg("Password must be at least 5-character long.");
      clearMsg();
      return;
    }
    setLoading(true);
    const response = await fetch(REGISTER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setLoading(false);
    if (response.status === 400) {
      setMsg(data.message);
      clearMsg();
    } else if (response.status === 200) {
      localStorage.setItem("token", data.token);
      setLogIn();
      setSuccess(true);
      setMsg(data.message);
    }
  }

  return (
    <div
      className={
        "w-full flex flex-col items-center pt-4 pb-1 dark:bg-gradient-to-tr dark:from-[#172A46] dark:via-[#0F2746] dark:to-[#11386E] min-h-screen text-sky-100 bg-gradient-to-r from-[#1D6777] via-[#218E61] to-[#13885D]"
      }
    >
      <div className="w-full h-16 flex justify-center">
        <img src="./assets/SCWhite.svg" alt="Survey Connect logo" />
      </div>
      <div className="w-11/12 md:w-1/2 xl:w-1/3 2xl:w-1/4 border-transparent rounded-2xl p-10 dark:bg-[#172A46] shadow-2xl bg-slate-900/50">
        <form className="flex flex-col w-full pt-10 relative overflow-x-hidden overflow-y-visible">
          <div
            className={
              msg
                ? "absolute top-0 left-0 w-full transition-all duration-500 text-sm overflow-hidden"
                : "absolute top-0 left-[1200px] w-full  transition-all  duration-500 overflow-hidden "
            }
          >
            <div
              className={
                success
                  ? "flex items-center  border-l-4   py-2 px-3 shadow-md mb-2 bg-green-700"
                  : "flex items-center  border-l-4   py-2 px-3 shadow-md mb-2 bg-[#972a2a] border-red-500"
              }
            >
              <div
                className={
                  success
                    ? "text-green-700 rounded-full bg-white mr-3 dark:text-cyan-700"
                    : "text-red-700 rounded-full bg-white mr-3 dark:text-red-700"
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
          <p className="text-end mt-5 text-sm">
            Already have an account?{" "}
            <Link className="text-sky-500 hover:cursor-pointer m-0" to="/login">
              Login Here
            </Link>
          </p>

          <h1 className="text-2xl py-3 ">Create an account</h1>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-md mb-2">
              Email address
            </label>
            <input
              type="email"
              aria-required
              id="email"
              name="email"
              className="border-transparent rounded-xl outline-0 p-2 h-9 mb-3 text-slate-800"
              placeholder="example@email.com"
              onChange={(e) => {
                setUserInfo((prevState) => {
                  return { ...prevState, email: e.target.value };
                });
              }}
            />

            <label htmlFor="password" className="text-md  mb-2">
              Enter a password
            </label>
            <div className="w-full flex justify-center">
              <input
                type={passwordReveal.password ? "text" : "password"}
                name="password"
                id="password"
                className="border-transparent rounded-xl rounded-r-none outline-0 p-2 h-9 mb-4 text-slate-800 w-11/12 "
                placeholder="Password"
                onChange={(e) => {
                  setUserInfo((prevState) => {
                    return { ...prevState, password: e.target.value };
                  });
                }}
              />
              <div
                style={{ color: "#1A2629" }}
                className="bg-white rounded-r-xl outline-0 pt-2 pr-5 h-9 mb-3 w-1/12 "
                onClick={() => {
                  setPasswordReveal((prevState) => {
                    return { ...prevState, password: !prevState.password };
                  });
                }}
              >
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </div>
            </div>
            <label htmlFor="confirmPass" className="text-md mb-2">
              Confirm password
            </label>
            <div className="flex justify-center w-full">
              <input
                type={passwordReveal.confirmPassword ? "text" : "password"}
                name="confirmPass"
                id="confirmPass"
                className="border-transparent rounded-xl rounded-r-none outline-0 p-2 h-9 mb-8 text-slate-800 w-11/12"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setUserInfo((prevState) => {
                    return { ...prevState, confirmPassword: e.target.value };
                  });
                }}
              />
              <div
                style={{ color: "#1A2629" }}
                className="bg-white rounded-r-xl outline-0 pr-2 pt-2 h-9 mb-3 w-1/12 "
                onClick={() => {
                  setPasswordReveal((prevState) => {
                    return { ...prevState, confirmPassword: !prevState.confirmPassword };
                  });
                }}
              >
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              </div>
            </div>
            <div className="flex gap-3 mb-3">
              <input
                type="checkbox"
                id="termsOfUse"
                className="w-5"
                onChange={() => {
                  setUserInfo((prevState) => {
                    return { ...prevState, termsOfUse: !prevState.termsOfUse };
                  });
                }}
              />
              <label htmlFor="termsOfUse" className="text-sm ">
                You agree to the Terms of Use and Privacy Notice.
              </label>
            </div>
            <div className="flex gap-3 mb-10">
              <input type="checkbox" id="promotionTOU" className="w-12" />
              <label className="text-sm " htmlFor="promotionTOU">
                You agree to receive product news and special promotions via email. You can opt-out of these emails in
                your My Account page anytime.
              </label>
            </div>
          </div>

          <div
            className="w-full bg-zinc-900/75 h-10  hover:cursor-pointer flex justify-center items-center"
            onClick={(e) => onSubmitForm(e)}
          >
            {loading ? (
              <img src="./assets/loading-gif.gif" className="w-[25px]" alt="loading" />
            ) : (
              <span>Create Account</span>
            )}
          </div>

          <Link to="/" className="text-white text-center mt-5">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
