import { Link } from "react-router-dom";

function PricingComponent() {
  return (
    <div className="mt-16  h-full">
      <div className="xl:w-1/2 w-2/3 mx-auto flex text-center flex-col justify-center items-center gap-5">
        <h2 className="text-center text-4xl">Select your plan</h2>
        <p>
          Our options include a Basic plan, a Standard plan, and an Enterprise plan. These plans cater to a range of
          needs, offering features such as unlimited survey creation, custom branding, and various response limits. With
          this flexibility, your customers can find the perfect solution for their survey requirements. Sign up today
          and embark on your survey journey with us!
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex lg:flex-row flex-col justify-center ">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 dark:border-cyan-700 rounded-lg shadow sm:p-8  m-4 justify-center dark:bg-[#0F172A]">
            <h5 className="mb-4 text-xl font-medium dark:text-white">Basic</h5>
            <div className="flex items-baseline">
              <span className="text-3xl font-semibold dark:text-white">$</span>
              <span className="text-5xl font-extrabold tracking-tight dark:text-white">10</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-slate-400 ">/month</span>
            </div>

            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-600   dark:text-cyan-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  Unlimited survey creation
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-cyan-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  Custom survey branding
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-cyan-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  100 responses/month
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500 dark:text-slate-400">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-400 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  Dedicated Account Manager
                </span>
              </li>

              <li className="flex space-x-3 line-through decoration-gray-500 dark:text-slate-400"></li>
            </ul>
            <Link
              type="button"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-cyan-700 dark:hover:bg-cyan-700/[0.9]"
              to={"/signup"}
            >
              Sign Up
            </Link>
          </div>

          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 dark:border-cyan-700 rounded-lg shadow sm:p-8   m-4 dark:bg-[#0F172A]">
            <h5 className="mb-4 text-xl font-medium dark:text-white">Standard</h5>
            <div className="flex items-baseline">
              <span className="text-3xl font-semibold dark:text-white">$</span>
              <span className="text-5xl font-extrabold tracking-tight dark:text-white">50</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-slate-400">/month</span>
            </div>

            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-cyan-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  Unlimited survey creation
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-cyan-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  Custom survey branding
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-cyan-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  Unlimited responses/month
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-400 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">Dedicated Account Manager</span>
              </li>

              <li className="flex space-x-3 line-through decoration-gray-500"></li>
            </ul>
            <Link
              to="/signup"
              type="button"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-cyan-700 dark:hover:bg-cyan-700/[0.9]"
            >
              Sign Up
            </Link>
          </div>
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 dark:border-cyan-700 rounded-lg shadow sm:p-8   m-4 dark:bg-[#0F172A]">
            <h5 className="mb-4 text-xl font-medium dark:text-white ">Enterprise</h5>
            <div className="flex items-baseline">
              <span className="text-3xl font-semibold dark:text-white">$</span>
              <span className="text-5xl font-extrabold tracking-tight dark:text-white">200</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-slate-400">/month</span>
            </div>

            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-cyan-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  Unlimited survey creation
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-cyan-700 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  Custom survey branding
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-cyan-700 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  Unlimited responses/month
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-cyan-700 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-slate-400">
                  Dedicated Account Manager
                </span>
              </li>

              <li className="flex space-x-3 line-through decoration-gray-500"></li>
            </ul>
            <Link
              to={"/signup"}
              type="button"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-cyan-700 dark:hover:bg-cyan-700/[0.9]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingComponent;
