// import { useEffect, useState } from "react";
import DashNav from "../components/Dashboard/DashNav";
import SurveyList from "../components/Dashboard/SurveyList";
import { useFetch } from "../util/useFetch";
const SURVEYS_URL = "http://localhost:5000/api";
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
  const { data: surveys, loading, error } = useFetch<SurveyItem[]>(SURVEYS_URL + "/surveys");
  if (surveys) {
    localStorage.setItem("surveys", JSON.stringify(surveys));
  }
  return (
    <div className="dark:text-slate-200 md:w-2/3 mx-auto w-5/6 h-full">
      <DashNav></DashNav>
      <SurveyList surveys={surveys} loading={loading} error={error}></SurveyList>
    </div>
  );
}

export default Dashboard;
