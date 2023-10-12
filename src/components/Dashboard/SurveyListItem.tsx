import { Link } from "react-router-dom";
import { faLock, faEdit, faShare, faTrash, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SurveyItem {
  id: string;
  surveyName: string;
  organization: string;
  description: string;
  activeStatus: boolean;
  dateEnd: string;
}

function SurveyListItem({ id, surveyName, organization, dateEnd }: SurveyItem) {
  return (
    <div className="my-5 bg-slate-100 shadow-xl dark:bg-slate-900 rounded-xl py-5 px-4 ">
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
        <div className="flex items-center">
          <Link
            to={`/surveydetail/${id}`}
            className="font-light border bg-green-600 border-green-600 py-1 px-5 rounded-2xl text-white hover:bg-slate-200 hover:text-slate-800 dark:bg-transparent dark:border-slate-400 dark:hover:text-cyan-600 dark:hover:border-cyan-600 text-xs"
          >
            View
          </Link>
        </div>
        <div className="lg:flex gap-2 hidden md:items-center">
          <div className="w-8 h-8 border border-slate-400 flex justify-center items-center rounded-xl hover:border-green-600 hover:text-green-600 dark:hover:border-cyan-600 dark:hover:text-cyan-600 cursor-pointer">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div className="w-8 h-8 border border-slate-400 flex justify-center items-center rounded-xl hover:border-green-600 hover:text-green-600 dark:hover:border-cyan-600 dark:hover:text-cyan-600 cursor-pointer">
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <div className="w-8 h-8 border border-slate-400 flex justify-center items-center rounded-xl hover:border-green-600 hover:text-green-600 dark:hover:border-cyan-600 dark:hover:text-cyan-600 cursor-pointer">
            <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
        <div className="hidden lg:flex md:items-center">
          <div className="w-8 h-8 border border-slate-400 flex justify-center items-center rounded-xl hover:text-slate-200 hover:bg-red-300 hover:border-red-300 cursor-pointer">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
        <div className="cursor-pointer lg:hidden block">
          <FontAwesomeIcon icon={faEllipsisVertical} fontSize={18} />
        </div>
      </div>
    </div>
  );
}

export default SurveyListItem;
