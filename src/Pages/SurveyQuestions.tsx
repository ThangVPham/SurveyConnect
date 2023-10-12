import { useParams } from "react-router-dom";
import SurveyForm from "../components/SurveyForm/SurveyForm";
import surveys from "../../public/surveys/surveys.json";
import Footer from "../components/Footer";
interface Survey {
  id: string;
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

function SurveyQuestions() {
  const { id: surveyId } = useParams();
  let localStorageSurvey: Survey = {
    id: "",
    surveyName: "",
    organization: "",
    description: "",
    activeStatus: false,
    dateEnd: "",
    questions: [],
  };

  let fetchedSurvey = JSON.parse(localStorage.getItem("survey") || "");
  if (typeof fetchedSurvey !== "string") {
    if (!(fetchedSurvey.id === surveyId)) {
      fetchedSurvey = surveys.find((survey) => survey.id);
    }
    if (fetchedSurvey) {
      localStorageSurvey = fetchedSurvey;
    }
  }

  return (
    <div className="flex flex-col items-center ">
      <SurveyForm surveyName={localStorageSurvey.surveyName} questions={localStorageSurvey.questions}></SurveyForm>

      <Footer></Footer>
    </div>
  );
}

export default SurveyQuestions;
