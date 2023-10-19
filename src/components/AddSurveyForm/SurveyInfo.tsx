import React from "react";
interface ISurveyInfo {
  setSurvey: (value: React.SetStateAction<ISurvey>) => void;
  setOtherSelected: React.Dispatch<React.SetStateAction<boolean>>;
  otherSelected: boolean;
  id: number;
  setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>;
  SubmitSurvey: () => Promise<void>;
  survey: ISurvey;
  validInputFields: IValidInputFields;
  setValidInputFields: React.Dispatch<React.SetStateAction<IValidInputFields>>;
}
interface IValidInputFields {
  suvreyName: boolean;
  dateEnd: boolean;
  questionsLength: boolean;
  questionsCheck: boolean;
}
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
function SurveyInfo({
  setSurvey,
  setOtherSelected,
  otherSelected,
  id,
  setQuestions,
  SubmitSurvey,
  survey,
  validInputFields,
  setValidInputFields,
}: ISurveyInfo) {
  function CheckSurveyBeforeSubmit(): boolean {
    let questionsCheck = true;
    for (let i = 0; i < survey.questions.length; i++) {
      if (survey.questions[i].question === "") {
        questionsCheck = false;
        break;
      }
    }
    setValidInputFields((prevState) => {
      return { ...prevState, questionsCheck: questionsCheck };
    });
    if (survey.surveyName === "") {
      setValidInputFields((prevState) => {
        return { ...prevState, suvreyName: false };
      });
    }
    if (survey.dateEnd === "") {
      setValidInputFields((prevState) => {
        return { ...prevState, dateEnd: false };
      });
    }
    if (survey.questions.length < 1) {
      setValidInputFields((prevState) => {
        return { ...prevState, questionsLength: false };
      });
    }
    const condition =
      survey.dateEnd !== "" && survey.questions.length > 0 && questionsCheck && survey.surveyName !== "";

    return condition;
  }

  return (
    <div className="lg:w-1/3 lg:border-r-2 border-gray-600 dark:border-slate-400 border-b-2 lg:border-b-0 w-full min-h-screen">
      <div className="flex flex-col items-center justify-start w-full lg:w-1/3 lg:fixed">
        <h2 className="text-lg mt-4 lg:mt-6 xl:mt-16">Please fill out the survey information</h2>

        <div className=" w-full max-full flex  mt-10 ">
          <div className="w-11/12 flex flex-col rounded-lg dark:border-slate-200 border-green-600   border-t-4 shadow-2xl border-t-6 items-start justify-center mx-auto gap-8 p-4 mb-4 bg-white dark:bg-transparent">
            <div className="flex flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Survey Name"
                className={
                  validInputFields.suvreyName
                    ? " h-1/2 border-0 border-b-2 border-green-600 dark:border-slate-400 dark:bg-transparent px-3 w-full text-[35px] outline-none mt-2 bg-transparent"
                    : " h-1/2 border-0 border-b-2 border-red-600 dark:border-red-600 dark:bg-transparent px-3 w-full text-[35px] outline-none mt-2 bg-transparent"
                }
                onChange={(e) => {
                  setSurvey((prevState) => {
                    return { ...prevState, surveyName: e.target.value };
                  });
                }}
              />
              {!validInputFields.suvreyName && <p className="text-xs mt-2 text-red-600">Field cannot be empty*</p>}
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
                name="surveyType"
                id="surveyType"
                className="dark:bg-[#0F2746] w-full dark:border-slate-400  outline-none dark:text-slate-400 py-1 bg-transparent  border-b-2 border-green-600 text-slate-400 px-2"
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
                className={
                  validInputFields.dateEnd
                    ? "dark:bg-transparent w-full border-b-2 px-3 outline-none text-slate-400 bg-transparent border-green-600 dark:border-slate-400"
                    : "dark:bg-transparent w-full border-b-2 px-3 outline-none text-slate-400 bg-transparent border-red-600 dark:border-red-600"
                }
                placeholder="Date"
                onChange={(e) => {
                  setSurvey((prevState) => {
                    return { ...prevState, dateEnd: e.target.value };
                  });
                }}
              />
              {!validInputFields.dateEnd && <p className="text-xs mt-2 text-red-600">Field cannot be empty*</p>}
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
                    questionType: "MC",
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
          <button
            className="border p-2 rounded-2xl dark:hover:text-slate-900 dark:hover:bg-slate-200 transition-bg duration-300 dark:border-slate-200 bg-green-600 text-slate-100 border-green-600 dark:bg-transparent hover:text-green-600 hover:bg-slate-200"
            onClick={() => {
              const readyToSubmit = CheckSurveyBeforeSubmit();
              if (readyToSubmit) {
                console.log("submitin");
                SubmitSurvey();
              } else {
                console.log("not ready, check");
              }
            }}
          >
            Submit Survey
          </button>
        </div>
      </div>
    </div>
  );
}

export default SurveyInfo;
