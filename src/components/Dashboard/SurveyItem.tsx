import { Link } from "react-router-dom";
import { faLock, faUnlock, faEdit, faShareAlt, faTrash, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileSurveyListItemSubMenu from "./MobileSurveyListItemSubMenu";
import { useState } from "react";

interface SurveyItem {
  _id: string;
  surveyName: string;
  organization: string;
  description: string;
  activeStatus: boolean;
  dateEnd: string;
  questions: Question[];
}

interface Question {
  questionType: string;
  question: string;
  options: string[];
  correctOption: string | null;
  imgURL: string[];
  imgDesc: string[];
}

function SurveyItem({ _id, surveyName, organization, dateEnd, activeStatus }: SurveyItem) {
  const [subMenuToggled, setSubmenuToggled] = useState(false);
  const [surveyStatus, setSurveyStatus] = useState(activeStatus);
  const [copiedNotification, setCopiedNotification] = useState(false);
  function triggerToast() {
    setCopiedNotification(true);
    setTimeout(() => {
      setCopiedNotification(false);
    }, 2000);
    console.log("done");
  }

  return (
    <div
      className="my-5 bg-slate-100 shadow-xl dark:bg-slate-900 rounded-xl py-5 px-4 "
      onClick={() => {
        if (subMenuToggled) {
          setSubmenuToggled(false);
        }
      }}
    >
      <div
        className={
          copiedNotification
            ? "absolute opacity-100 bottom-10 right-10 md:right-32 transition-all duration-500 z-52"
            : "absolute opacity-0 bottom-10 right-10 md:right-[-400px] transition-all duration-500 z-50"
        }
      >
        <div className="flex items-center bg-green-500 border-l-4  border-green-700 py-2 px-3 shadow-md mb-2 dark:bg-[#121f3a] dark:border-cyan-900">
          <div className="text-green-600 rounded-full bg-white mr-3 dark:text-slate-200">
            <svg
              width="1.8em"
              height="1.8em"
              viewBox="0 0 16 16"
              className="bi bi-check"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
              />
            </svg>
          </div>
          <div className="text-white max-w-xs ">URL has been copied to your clipboard</div>
        </div>
      </div>
      <div className="w-full flex justify-between items-top md:text-sm text-center text-xs font-semibold text-slate-600 dark:text-slate-200">
        <div className="xl:w-32 w-20">
          <p>Name</p>
          <p className="text-xs font-light">{surveyName}</p>
        </div>
        <div className="xl:w-32 w-20">
          <p>Survey Owner</p>
          <p className="text-xs font-light">
            <i>{organization}</i>
          </p>
        </div>
        <div className="hidden sm:block">
          <p>Responses</p>
          <p className="text-xs font-light">
            <i>12</i>
          </p>
        </div>

        <div className="hidden lg:block">
          <p>Date End</p>
          <p className="text-xs font-light">
            <i>{dateEnd}</i>
          </p>
        </div>
        <div className="hidden lg:block">
          <p>Status</p>
          <p className="text-xs font-light">
            <i>{surveyStatus ? "Open" : "Closed"}</i>
          </p>
        </div>
        <div className="flex items-center">
          <Link
            to={`/surveydetail/${_id}`}
            className="font-light border bg-green-600 border-green-600 py-1 px-5 rounded-2xl text-white hover:text-green-600 hover:bg-white hover:font-semibold  dark:bg-transparent dark:border-slate-400 dark:hover:text-cyan-600 dark:hover:border-cyan-600 text-xs"
          >
            View
          </Link>
        </div>
        <div className="lg:flex gap-2 hidden md:items-center">
          <div
            className="w-8 h-8 border border-slate-400 flex justify-center items-center rounded-xl hover:border-green-600 hover:text-green-600 dark:hover:border-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
            onClick={() => setSurveyStatus((prevState) => !prevState)}
          >
            <FontAwesomeIcon icon={surveyStatus ? faLock : faUnlock} />
          </div>
          <div className="w-8 h-8 border border-slate-400 flex justify-center items-center rounded-xl hover:border-green-600 hover:text-green-600 dark:hover:border-cyan-600 dark:hover:text-cyan-600 cursor-pointer">
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <div
            className="w-8 h-8 border border-slate-400 flex justify-center items-center rounded-xl hover:border-green-600 hover:text-green-600 dark:hover:border-cyan-600 dark:hover:text-cyan-600 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(`http://localhost:5173/surveydetail/${_id}`);
              triggerToast();
            }}
          >
            <FontAwesomeIcon icon={faShareAlt} />
          </div>
        </div>
        <div className="hidden lg:flex md:items-center">
          <div className="w-8 h-8 border border-slate-400 flex justify-center items-center rounded-xl hover:text-slate-200 hover:bg-red-300 hover:border-red-300 cursor-pointer">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
        <div
          className="cursor-pointer lg:hidden block relative"
          onClick={() => {
            setSubmenuToggled((prevState) => !prevState);
          }}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} fontSize={18} />
          <div>
            <MobileSurveyListItemSubMenu
              subMenuToggled={subMenuToggled}
              triggerToast={triggerToast}
            ></MobileSurveyListItemSubMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyItem;
