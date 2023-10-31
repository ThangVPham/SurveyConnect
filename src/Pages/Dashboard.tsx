import { useNavigate } from "react-router-dom";
import DashNav from "../components/Dashboard/DashNav";
import SurveyList from "../components/Dashboard/SurveyList";
import { useFetch } from "../util/useFetch";
import { useEffect } from "react";
import { USER_SURVEY_API } from "../API/Api";
// const USER_SURVEY_API = "http://localhost:5000/api/user/surveys/";
interface SurveyList {
  surveys: SurveyItem[];
}
interface SurveyItem {
  _id: string;
  surveyName: string;
  organization: string;
  description: string;
  activeStatus: boolean;
  dateEnd: string;
  questions: Question[];
  responses: [
    {
      question: string;
      answer: string[];
    }
  ];
}
interface Question {
  questionType: string;
  question: string;
  options: string[];
  correctOption: string | null;
  imgURL: string[];
  imgDesc: string[];
}
function Dashboard() {
  const { data: surveys, loading, error } = useFetch<SurveyItem[]>(USER_SURVEY_API);
  const navigate = useNavigate();
  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    if (!loginToken) {
      navigate("/login");
    }
  });
  return (
    <div className="dark:text-slate-200 md:w-2/3 mx-auto w-5/6 h-full">
      <DashNav></DashNav>
      <SurveyList surveys={surveys} loading={loading} error={error} />
    </div>
  );
}

export default Dashboard;
