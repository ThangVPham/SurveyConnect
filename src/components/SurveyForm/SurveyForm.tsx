import { useState } from "react";
import { Debounce } from "../../util/Debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../util/useFetch";
import { SURVEY_API } from "../../API/Api";
interface Survey {
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
// interface Answer {
//   name: string;
//   email: string;
//   answers: string[];
// }

enum QuestionType {
  SHORT_ANSWER = "Short Answer",
  MULTIPLE_CHOICE = "MC",
  CHECK_BOX = "Checkbox",
  LONG_FEEDBACK = "Long Feedback",
}

// const SURVEY_API = "http://localhost:5000/api/user/surveys";
function SurveyForm() {
  //   const [answer, setAnswer] = useState<Answer>({ name: "", email: "", answers: [] });
  const { id } = useParams();
  const { data: survey } = useFetch<Survey>(SURVEY_API + `/${id}`);
  const [questionNumber, setQuestionNumber] = useState(0);
  const surveyLength = survey?.questions.length || Number.POSITIVE_INFINITY;
  function nextQ() {
    setQuestionNumber(questionNumber + 1);
  }
  function prevQ() {
    setQuestionNumber(questionNumber - 1);
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
                    type="radio"
                    name={`question ${questionNumber + 1}`}
                    id={option}
                    value={option}
                    onClick={(e) => {
                      const input = e.target as HTMLInputElement;
                      console.log(input.value);
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

        {survey?.questions[questionNumber].questionType === QuestionType.CHECK_BOX && (
          <div className="flex flex-col flex-wrap items-start w-5/6">
            {survey?.questions[questionNumber].options.map((option) => {
              return (
                <div key={option}>
                  <input
                    type="checkbox"
                    name={`question ${questionNumber + 1}`}
                    id={option}
                    value={option}
                    onClick={(e) => {
                      const input = e.target as HTMLInputElement;
                      console.log(input.value);
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
              type="text"
              className="bg-stone-100 rounded-2xl px-4 dark:bg-slate-700 outline-none h-10"
              placeholder="Type answer here"
            />
          </div>
        )}
        {survey?.questions[questionNumber].questionType === QuestionType.LONG_FEEDBACK && (
          <div className="overflow-y-hidden w-full">
            <textarea
              className="bg-stone-100 rounded-lg px-4 dark:bg-slate-700 outline-none p-2 w-full resize-none"
              placeholder="Type answer here"
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
          className="w-28 bg-green-600 px-5 py-2 rounded-3xl text-xs h-full my-auto text-white dark:text-slate-300 border border-green-600  hover:text-green-600 hover:bg-white dark:bg-slate-800 dark:border-none dark:hover:bg-slate-100 dark:hover:text-slate-800 lg:text-base "
          onClick={() => {
            if (questionNumber < surveyLength - 1) {
              const cb = nextQ;
              Debounce({ cb });
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SurveyForm;
