// import WorkInProgress from "../assets/WorkInProgress";
import { useEffect, useState } from "react";
// import SingleQuesiton from "../components/SingleQuesiton";
import { useNavigate } from "react-router-dom";
import SurveyInfo from "../components/AddSurveyForm/SurveyInfo";
import SurveyQuestions from "../components/AddSurveyForm/SurveyQuestions";
interface ISurvey {
  surveyName: string;
  surveyOwner: string;
  organization: string;
  surveyType: string;
  description: string;
  activeStatus: boolean;
  dateEnd: string;
  instructionMessage: string;
  response: IResponse[];
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
  });
  const [questions, setQuestions] = useState<IQuestion[]>([
    { questionType: "MC", question: "", options: [""], correctOption: "", imgDesc: [""], imgURL: [""], id: id },
  ]);
  const [survey, setSurvey] = useState<ISurvey>({
    surveyName: "",
    surveyOwner: "",
    organization: "",
    surveyType: "",
    description: "",
    activeStatus: true,
    dateEnd: "",
    instructionMessage: "",
    response: [],
    questions: questions,
  });
  useEffect(() => {
    setSurvey((prevState) => {
      return { ...prevState, questions: questions };
    });
  }, [questions]);
  const [otherSelected, setOtherSelected] = useState(false);
  console.log(survey);
  id++; //To ensure ID is unique (only goes up) for each question
  return (
    <div className="w-screen lg:flex block ">
      {/* <div className="lg:w-1/3 lg:border-r-2 border-gray-600 dark:border-slate-400 border-b-2 lg:border-b-0 w-full min-h-screen">
        <div className="flex flex-col items-center justify-start w-full lg:w-1/3 lg:fixed">
          <div className=" w-11/12 max-full flex  mt-10 ">
            <div className="w-11/12 flex flex-col rounded-lg dark:border-slate-200 border-green-600   border-t-4 shadow-2xl border-t-6 items-start justify-center mx-auto gap-8 p-4 mb-4 bg-white dark:bg-transparent">
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  placeholder="Survey Name"
                  className=" h-1/2 border-0 border-b-2 border-green-600 dark:border-slate-400 dark:bg-transparent px-3 w-full text-[35px] outline-none mt-2 bg-transparent"
                  onChange={(e) => {
                    setSurvey((prevState) => {
                      return { ...prevState, surveyName: e.target.value };
                    });
                  }}
                />
                <textarea
                  placeholder="Description"
                  className="border-0 border-b-2 dark:bg-transparent px-3 w-full text-base  h-36 resize-none outline-none bg-transparent border-green-600 dark:border-slate-400"
                  onChange={(e) => {
                    setSurvey((prevState) => {
                      return { ...prevState, description: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="dark:bg-transparent w-full ">
                <input
                  type="text"
                  name="organization"
                  id="organization"
                  className="dark:bg-transparent w-full border-b-2 px-3  outline-none bg-transparent border-green-600 dark:border-slate-400"
                  placeholder="Organization"
                  onChange={(e) => {
                    setSurvey((prevState) => {
                      return { ...prevState, organization: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="dark:bg-transparent w-full ">
                <select
                  name="organization"
                  id="organization"
                  className="dark:bg-[#0F2746] w-full dark:border-slate-400  outline-none dark:text-slate-400 py-1 bg-transparent  border-b-2 border-green-600 text-slate-400 px-2"
                  placeholder="Organization"
                  onChange={(e) => {
                    if (e.target.value === "Other") {
                      setOtherSelected(true);
                    } else {
                      setOtherSelected(false);
                      setSurvey((prevState) => {
                        return { ...prevState, surveyType: e.target.value };
                      });
                    }
                  }}
                >
                  <option value="Academic">Academic</option>
                  <option value="Market">Market</option>
                  <option value="Socio-economics">Socio-economics</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="History">History</option>
                  <option value="Geography">Geography</option>
                  <option value="Literature">Literature</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {otherSelected && (
                <input
                  type="text"
                  name="SurveyType"
                  id="SurveyType"
                  className="dark:bg-transparent w-full border-b-2 px-3  outline-none bg-transparent border-green-600 dark:border-slate-400"
                  placeholder="Survey Type"
                  onChange={(e) => {
                    setSurvey((prevState) => {
                      return { ...prevState, surveyType: e.target.value };
                    });
                  }}
                />
              )}

              <div className="dark:bg-transparent w-full">
                <label htmlFor="dateEnd" className="text-slate-400">
                  End Date
                </label>
                <input
                  type="date"
                  name="dateEnd"
                  id="dateEnd"
                  className="dark:bg-transparent w-full border-b-2 px-3 outline-none text-slate-400 bg-transparent border-green-600 dark:border-slate-400"
                  placeholder="Date"
                  onChange={(e) => {
                    setSurvey((prevState) => {
                      return { ...prevState, date: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="dark:bg-transparent w-full">
                <textarea
                  placeholder="Instructions"
                  id="instruction"
                  className="border-0 border-b-2 dark:bg-transparent px-3 w-full text-base  h-24 resize-y outline-none border-green-600 bg-transparent dark:border-slate-400"
                  onChange={(e) => {
                    setSurvey((prevState) => {
                      return { ...prevState, instructionMessage: e.target.value };
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <button
              className="border p-2 rounded-2xl dark:hover:text-slate-900 dark:hover:bg-slate-200 transition-bg duration-300 dark:border-slate-200 bg-green-600 text-slate-100 border-green-600 dark:bg-transparent hover:text-green-600 hover:bg-slate-200"
              onClick={() => {
                setQuestions((prevState) => {
                  return [
                    ...prevState,
                    {
                      questionType: "",
                      question: "",
                      options: [""],
                      correctOption: "",
                      imgDesc: [],
                      imgURL: [],
                      id: id,
                    },
                  ];
                });
              }}
            >
              Add Questions
            </button>
            <button className="border p-2 rounded-2xl dark:hover:text-slate-900 dark:hover:bg-slate-200 transition-bg duration-300 dark:border-slate-200 bg-green-600 text-slate-100 border-green-600 dark:bg-transparent hover:text-green-600 hover:bg-slate-200">
              Submit Survey
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full lg:w-2/3 flex flex-col gap-6 mt-10">
        {questions.map((question, index) => {
          return (
            <SingleQuesiton q={question} key={question.id} index={index} setQuestions={setQuestions}></SingleQuesiton>
          );
        })}
      </div> */}
      <SurveyInfo
        setSurvey={setSurvey}
        setOtherSelected={setOtherSelected}
        otherSelected={otherSelected}
        id={id}
        setQuestions={setQuestions}
      ></SurveyInfo>
      <SurveyQuestions questions={questions} setQuestions={setQuestions}></SurveyQuestions>
    </div>
  );
}

export default NewSurvey;
