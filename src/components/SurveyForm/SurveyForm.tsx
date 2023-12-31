import { useEffect, useState } from "react";
import { Debounce } from "../../util/Debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../util/useFetch";
import { SURVEY_API } from "../../API/Api";
// const SURVEY_API = "http://localhost:5000/api/surveys";
interface Survey {
  _id: string;
  surveyName: string;
  organization: string;
  description: string;
  activeStatus: boolean;
  dateEnd: string;
  questions: Question[];
  surveyOwner: string;
}
interface Question {
  questionType: string;
  question: string;
  options: string[];
  correctOption: string | null;
  imgURL: string[];
  imgDesc: string[];
}

interface Answer {
  question: string;
  answer: string[];
}
enum QuestionType {
  SHORT_ANSWER = "Short Answer",
  MULTIPLE_CHOICE = "MC",
  CHECK_BOX = "Checkbox",
  LONG_FEEDBACK = "Long Feedback",
}

function InitializeAnswerArray(
  setAnswer: React.Dispatch<React.SetStateAction<Answer[]>>,
  surveyQuestionLength: number = 0
): void {
  setAnswer(() => {
    const newAnswerArray = new Array(surveyQuestionLength);
    newAnswerArray.fill({ question: "", answer: [] });
    return newAnswerArray;
  });
}

function SurveyForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: survey, loading } = useFetch<Survey>(SURVEY_API + `/${id}`, "GET");
  const [answer, setAnswer] = useState<Answer[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const surveyLength = survey?.questions.length || Number.POSITIVE_INFINITY;
  const [submitLoading, setSubmitLoading] = useState(false);
  useEffect(() => {
    InitializeAnswerArray(setAnswer, survey?.questions.length);
  }, [loading]);
  function nextQ() {
    setQuestionNumber(questionNumber + 1);
  }
  function prevQ() {
    setQuestionNumber(questionNumber - 1);
  }
  async function handleSubmit() {
    setSubmitLoading(true);
    const surveyValid = answer.every((a) => {
      return a.answer.length > 0;
    });
    if (surveyValid) {
      const headerInfo = {
        userId: survey?.surveyOwner ?? "0",
        "Content-Type": "application/json",
      };
      const surveyAnswer = JSON.stringify(answer);
      const res = await fetch(`${SURVEY_API}/${survey?._id}`, {
        method: "POST",
        headers: headerInfo,
        body: surveyAnswer,
      });
      const message = await res.json();
      console.log(message);
      if (res.status === 200) {
        navigate("/");
      } else {
        console.log(message);
      }
    } else {
      console.log("Question response missing");
    }
    setSubmitLoading(false);
  }
  return (
    <div className="flex flex-col w-full items-center justify-center  ">
      <div className="flex flex-col mt-40 lg:mt-20 md:w-1/2 w-11/12 items-center min-h-[400px] dark:bg-slate-800 rounded-2xl shadow-2xl p-5 ">
        <h3 className="text-xl">{survey?.surveyName}</h3>
        <h5 className="text-sm">
          Question {questionNumber + 1} of {survey?.questions.length}
        </h5>
        <p className="w-full border-b-2 mb-5 pb-5">
          Q{questionNumber + 1}. {survey?.questions[questionNumber].question}
        </p>
        {survey?.questions[questionNumber].questionType === QuestionType.MULTIPLE_CHOICE && (
          <div className="flex flex-col flex-wrap items-start w-5/6">
            {survey.questions[questionNumber].options.map((option, i) => {
              return (
                <div key={i}>
                  <input
                    checked={answer[questionNumber]?.answer[0] === option}
                    type="radio"
                    name={`question ${questionNumber + 1}`}
                    id={`${option} ${questionNumber}`}
                    value={option}
                    onChange={(e) => {
                      const input = e.target as HTMLInputElement;
                      setAnswer((prevState) => {
                        prevState.splice(questionNumber, 1, {
                          question: survey.questions[questionNumber].question,
                          answer: [input.value],
                        });
                        return [...prevState];
                      });
                    }}
                  />

                  <label htmlFor={`${option} ${questionNumber}`} className="pl-4">
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
        )}

        {survey?.questions[questionNumber].questionType === QuestionType.CHECK_BOX && (
          <div className="flex flex-col flex-wrap items-start w-5/6">
            {survey?.questions[questionNumber].options.map((option) => {
              return (
                <div key={option}>
                  <input
                    checked={answer[questionNumber]?.answer.includes(option)}
                    type="checkbox"
                    name={`question ${questionNumber + 1}`}
                    id={option}
                    value={option}
                    onChange={(e) => {
                      const input = e.target as HTMLInputElement;
                      setAnswer((prevState) => {
                        const newAnswer = prevState[questionNumber]?.answer ?? [];
                        const index = newAnswer.findIndex((item) => item === input.value);
                        if (index < 0) {
                          newAnswer.push(input.value);
                        } else {
                          newAnswer.splice(index, 1);
                        }
                        prevState.splice(questionNumber, 1, {
                          question: survey.questions[questionNumber].question,
                          answer: [...newAnswer],
                        });
                        return [...prevState];
                      });
                    }}
                  />

                  <label htmlFor={option} className="pl-4">
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
        )}
        {survey?.questions[questionNumber].questionType === QuestionType.SHORT_ANSWER && (
          <div>
            <input
              value={answer[questionNumber].answer}
              type="text"
              className="bg-stone-100 rounded-2xl px-4 dark:bg-slate-700 outline-none h-10"
              placeholder="Type answer here"
              onChange={(e) => {
                const input = e.target as HTMLInputElement;
                setAnswer((prevState) => {
                  prevState.splice(questionNumber, 1, {
                    question: survey.questions[questionNumber].question,
                    answer: [input.value],
                  });
                  return [...prevState];
                });
              }}
            />
          </div>
        )}
        {survey?.questions[questionNumber].questionType === QuestionType.LONG_FEEDBACK && (
          <div className="overflow-y-hidden w-full">
            <textarea
              value={answer[questionNumber].answer}
              className="bg-stone-100 rounded-lg px-4 dark:bg-slate-700 outline-none p-2 w-full resize-none"
              placeholder="Type answer here"
              onChange={(e) => {
                const input = e.target as HTMLTextAreaElement;
                setAnswer((prevState) => {
                  prevState.splice(questionNumber, 1, {
                    question: survey.questions[questionNumber].question,
                    answer: [input.value],
                  });
                  return [...prevState];
                });
              }}
            />
          </div>
        )}
        <div className="">
          <Link to={"/dashboard"}>
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>
      </div>
      <div className="flex gap-10 mt-10">
        <button
          className="w-28 bg-green-600 px-5 py-2 rounded-3xl text-xs h-full my-auto text-white dark:text-slate-300 border border-green-600  hover:text-green-600 hover:bg-white dark:bg-slate-800 dark:border-none dark:hover:bg-slate-100 dark:hover:text-slate-800 lg:text-base "
          disabled={submitLoading}
          onClick={() => {
            if (questionNumber > 0) {
              const cb = prevQ;
              Debounce({ cb });
            }
          }}
        >
          Previous
        </button>
        <button
          className={
            survey?.questions && questionNumber === survey?.questions.length - 1
              ? "hidden"
              : "w-28 bg-green-600 px-5 py-2 rounded-3xl text-xs h-full my-auto text-white dark:text-slate-300 border border-green-600  hover:text-green-600 hover:bg-white dark:bg-slate-800 dark:border-none dark:hover:bg-slate-100 dark:hover:text-slate-800 lg:text-base "
          }
          onClick={() => {
            if (questionNumber < surveyLength - 1) {
              const cb = nextQ;
              Debounce({ cb });
            }
          }}
        >
          Next
        </button>

        {survey?.questions && questionNumber === survey?.questions?.length - 1 && (
          <button
            className="w-28 bg-green-600 px-5 py-2 rounded-3xl text-xs h-full my-auto text-white dark:text-slate-300 border border-green-600  hover:text-green-600 hover:bg-white dark:bg-slate-800 dark:border-none dark:hover:bg-slate-100 dark:hover:text-slate-800 lg:text-base "
            onClick={() => {
              handleSubmit();
            }}
          >
            {submitLoading ? (
              <img src="./assets/loading-gif.gif" className="w-[25px] mx-auto" alt="loading"></img>
            ) : (
              <span>Submit</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default SurveyForm;
