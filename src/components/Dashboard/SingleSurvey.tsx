import { Link } from "react-router-dom";

interface SurveyItem {
  id: string;
  surveyName: string;
  organization: string;
  description: string;
  activeStatus: boolean;
  dateEnd: string;
  instructionMessage: string;
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
function SingleSurvey({ id, surveyName, organization, dateEnd }: SurveyItem) {
  return (
    <div className="my-5 bg-slate-100 shadow-xl dark:bg-gray-950 rounded-xl py-5 px-4 ">
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
            to={`/survey/${id}`}
            className="font-light border bg-green-600   border-green-600 py-1 px-5 rounded-2xl text-white hover:bg-slate-200 hover:text-slate-800 dark:bg-cyan-700 dark:border-cyan-700 hover:dark:bg-slate-800 dark:hover:text-slate-200"
          >
            View
          </Link>
        </div>
        <div className="lg:flex hidden md:items-center">
          <div>Lock</div>
          <div>Edit</div>
          <div>Share</div>
        </div>
        <div className="flex items-center">
          <div>Delete</div>
        </div>
      </div>
    </div>
  );
}

export default SingleSurvey;
