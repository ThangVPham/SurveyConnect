import { Link, useParams } from "react-router-dom";
import surveyDb from "../../public/surveys/surveys.json";
function SurveyDetail() {
  const { id: surveyId } = useParams();
  const survey = surveyDb.find((item) => item.id === surveyId);
  if (survey) {
    localStorage.setItem("survey", JSON.stringify(survey));
  }
  return (
    <div className="xl:flex xl:flex-col w-4/5 mx-auto md:w-1/2 lg:w-2/3  xl:w-full  xl:items-center xl:justify-center mt-2 text-center">
      <div className="flex flex-col xl:w-2/3 gap-5 my-5">
        <h2 className="text-4xl">{survey?.surveyName}</h2>
        <h4 className="text-sm">
          <i>By: {survey?.organization}</i>
        </h4>
        <h4>
          <i>End Date: {survey?.dateEnd}</i>
        </h4>
      </div>
      <div className="flex flex-col xl:w-2/3 gap-10 items-center">
        <img src="../../public/survey_animation.gif" alt="" className="w-2/3  lg:w-1/3 2xl:w-1/3 rounded-full" />
        <div className="xl:w-1/2 flex flex-col gap-2 text-start text-lg">
          <h3 className="font-semibold">Survey Infomation:</h3>
          <p className="text-sm"> {survey?.description}</p>
          <Link
            to={`/surveyform/${survey?.id}`}
            className="bg-green-600 px-2 py-2 rounded-3xl text-xs my-auto text-center text-white dark:text-slate-300 border border-green-600  hover:text-green-600 hover:bg-white dark:bg-slate-800 dark:border-none dark:hover:bg-slate-100 dark:hover:text-slate-800 lg:text-base "
          >
            Take Survey
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SurveyDetail;
