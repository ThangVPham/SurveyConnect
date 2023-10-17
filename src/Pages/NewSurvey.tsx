// import WorkInProgress from "../assets/WorkInProgress";
import { useEffect, useState } from "react";
// import SingleQuesiton from "../components/SingleQuesiton";
import { useNavigate } from "react-router-dom";
import SurveyInfo from "../components/AddSurveyForm/SurveyInfo";
import SurveyQuestions from "../components/AddSurveyForm/SurveyQuestions";
import { SURVEY_POST_API } from "../API/Api";
interface ISurvey {
  surveyName: string;
  surveyOwner: string;
  organization: string;
  surveyType: string;
  description: string;
  activeStatus: boolean;
  dateEnd: string;
  instructionMessage: string;
  responses: IResponse[];
  questions: IQuestion[];
}
interface IQuestion {
  id: number;
  questionType: string;
  question: string;
  options: string[];
  correctOption: string;
  imgURL: string[];
  imgDesc: string[];
}
interface IResponse {
  question: string;
  answer: string;
}

let id = 0;
function NewSurvey() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  const [questions, setQuestions] = useState<IQuestion[]>([
    { questionType: "MC", question: "", options: [""], correctOption: "", imgDesc: [], imgURL: [], id: id },
  ]);
  const [survey, setSurvey] = useState<ISurvey>({
    surveyName: "",
    surveyOwner: "",
    organization: "",
    surveyType: "MC",
    description: "",
    activeStatus: true,
    dateEnd: "",
    instructionMessage: "",
    responses: [],
    questions: questions,
  });
  async function SubmitSurvey() {
    const response = await fetch(SURVEY_POST_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(survey),
    });
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    setSurvey((prevState) => {
      return { ...prevState, questions: questions };
    });
  }, [questions]);
  const [otherSelected, setOtherSelected] = useState(false);
  console.log(survey);
  id++; //To ensure ID is unique (only goes up) for each question
  return (
    <div className="w-full lg:flex block ">
      <SurveyInfo
        setSurvey={setSurvey}
        setOtherSelected={setOtherSelected}
        otherSelected={otherSelected}
        id={id}
        setQuestions={setQuestions}
        SubmitSurvey={SubmitSurvey}
      ></SurveyInfo>
      <SurveyQuestions questions={questions} setQuestions={setQuestions}></SurveyQuestions>
    </div>
  );
}

export default NewSurvey;
