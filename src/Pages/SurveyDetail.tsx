import { Link } from "react-router-dom";
import surveys from "../../public/surveys/surveys.json";
function SurveyDetail() {
  const id = window.location.pathname.split("/").slice(-1).toString();
  const survey = surveys.find((survey) => survey.id === id);
  console.log(survey);
  return (
    <div className="flex flex-col xl:w-full items-center justify-center mt-20">
      <div className="flex flex-col xl:w-1/2 gap-5 my-10">
        <h2 className="text-lg">{survey?.surveyName}</h2>
        <h4 className="text-sm">
          <i>Organization: {survey?.organization}</i>
        </h4>
      </div>
      <div className="flex xl:w-1/2 gap-10">
        <div className="xl:w-1/2 flex flex-col gap-2">
          <p>Details: {survey?.description}</p>
          <Link
            to=""
            className="bg-green-600 px-2 py-2 rounded-3xl text-xs my-auto text-center text-white dark:text-slate-300 border border-green-600  hover:text-green-600 hover:bg-white dark:bg-slate-800 dark:border-none dark:hover:bg-slate-100 dark:hover:text-slate-800 lg:text-base "
          >
            Take Survey
          </Link>
        </div>
        <img src="../../public/survey.gif" alt="" className="w-1/3 rounded-full" />
      </div>
    </div>
  );
}

export default SurveyDetail;
