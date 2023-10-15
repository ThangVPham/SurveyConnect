import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

function SignupForm() {
  // const [passwordReveal, setPasswordReveal] = useState(false);
  return (
    <div
      className={
        "w-full flex flex-col items-center justify-center pb-1 dark:bg-gradient-to-tr dark:from-[#172A46] dark:via-[#0F2746] dark:to-[#11386E] h-screen text-sky-100 bg-gradient-to-r from-[#1D6777] via-[#218E61] to-[#13885D]"
      }
    >
      <div className="w-full h-16 flex justify-center">
        <img src="../../../public/SCWhite.svg" alt="Survey Connect logo" />
      </div>
      <div className="w-96 xl:w-1/4 border-transparent rounded-2xl p-10 dark:bg-[#172A46] shadow-2xl bg-slate-900/50">
        <form action="" className="flex flex-col w-full">
          <p className="text-end  text-sm">
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
              id="email"
              name="email"
              className="border-transparent rounded-xl outline-0 p-2 h-9 mb-3 text-slate-800"
              placeholder="example@email.com"
              required
            />

            <label htmlFor="password" className="text-md  mb-2">
              Enter a password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-transparent rounded-xl outline-0 p-2 h-9 mb-3 text-slate-800"
              placeholder="Password"
            />
            <label htmlFor="confirmPass" className="text-md  mb-2">
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPass"
              id="confirmPass"
              className="border-transparent rounded-xl outline-0 p-2 h-9 mb-8 text-slate-800"
              placeholder="Confirm Password"
            />
            <div className="flex gap-3 mb-3">
              <input type="checkbox" id="termsOfUse" className="w-5" />
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

          <div className="w-full bg-zinc-900/75 h-10  hover:cursor-pointer flex justify-center items-center">
            <span>Create Account</span>
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
