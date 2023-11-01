// import WorkInProgress from "../assets/WorkInProgress";
import { useEffect, useState } from "react";
// import SingleQuesiton from "../components/SingleQuesiton";
import { useNavigate } from "react-router-dom";
import SurveyInfo from "../components/AddSurveyForm/SurveyInfo";
import SurveyQuestions from "../components/AddSurveyForm/SurveyQuestions";
import { USER_SURVEY_API } from "../API/Api";
// const USER_SURVEY_API = "http://localhost:5000/api/user/surveys";
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
interface IValidInputFields {
  suvreyName: boolean;
  dateEnd: boolean;
  questionsLength: boolean;
  questionsCheck: boolean;
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
    surveyType: "Academic",
    description: "",
    activeStatus: true,
    dateEnd: "",
    instructionMessage: "",
    responses: [],
    questions: questions,
  });
  const [validInputFields, setValidInputFields] = useState<IValidInputFields>({
    suvreyName: true,
    dateEnd: true,
    questionsLength: true,
    questionsCheck: true,
  });
  async function SubmitSurvey() {
    try {
      const response = await fetch(USER_SURVEY_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },

        body: JSON.stringify(survey),
      });
      const data = await response.json();
      console.log(data.message);
      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        console.log(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    setSurvey((prevState) => {
      return { ...prevState, questions: questions };
    });
  }, [questions]);
  const [otherSelected, setOtherSelected] = useState(false);
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
        survey={survey}
        validInputFields={validInputFields}
        setValidInputFields={setValidInputFields}
      ></SurveyInfo>
      <SurveyQuestions
        questions={questions}
        setQuestions={setQuestions}
        validInputFields={validInputFields}
      ></SurveyQuestions>
    </div>
  );
}

export default NewSurvey;
