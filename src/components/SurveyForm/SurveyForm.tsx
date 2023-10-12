import { useState } from "react";
interface Survey {
  surveyName: string;
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
function SurveyForm({ surveyName, questions }: Survey) {
  //   const [answer, setAnswer] = useState<Answer>({ name: "", email: "", answers: [] });
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <div className="flex flex-col w-full items-center justify-center  ">
      <div className="flex flex-col mt-10 md:w-1/2 w-3/4 items-center h-[400px] dark:bg-slate-800 rounded-2xl shadow-2xl p-5">
        <h3 className="text-xl">{surveyName}</h3>
        <h5 className="text-sm">
          Question {questionNumber + 1} of {questions.length}
        </h5>
        <p className="w-full border-b-2 mb-5 pb-5">
          Q{questionNumber + 1}. {questions[questionNumber].question}
        </p>
        {questions[questionNumber].questionType === QuestionType.MULTIPLE_CHOICE && (
          <div className="flex flex-col flex-wrap items-start w-5/6">
            {questions[questionNumber].options.map((option) => {
              return (
                <div key={option}>
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

        {questions[questionNumber].questionType === QuestionType.CHECK_BOX && (
          <div className="flex flex-col flex-wrap items-start w-5/6">
            {questions[questionNumber].options.map((option) => {
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
        {questions[questionNumber].questionType === QuestionType.SHORT_ANSWER && (
          <div>
            <input
              type="text"
              className="bg-stone-100 rounded-2xl px-4 dark:bg-slate-700 outline-none h-10"
              placeholder="Type answer here"
            />
          </div>
        )}
        {questions[questionNumber].questionType === QuestionType.LONG_FEEDBACK && (
          <div>
            <textarea
              className="bg-stone-100 rounded-lg px-4 dark:bg-slate-700 outline-none p-2"
              cols={80}
              rows={5}
              placeholder="Type answer here"
            />
          </div>
        )}
        <p className="absolute bottom-4 text-xs">
          Powered by <i>Survey Connect&#169;. </i> All rights reserved {new Date().getFullYear().toString()}
        </p>
      </div>
      <div className="flex gap-10 mt-10">
        <button
          className="w-28 bg-green-600 px-5 py-2 rounded-3xl text-xs h-full my-auto text-white dark:text-slate-300 border border-green-600  hover:text-green-600 hover:bg-white dark:bg-slate-800 dark:border-none dark:hover:bg-slate-100 dark:hover:text-slate-800 lg:text-base "
          onClick={() => {
            if (questionNumber > 0) {
              setQuestionNumber(questionNumber - 1);
            }
          }}
        >
          Previous
        </button>
        <button
          className="w-28 bg-green-600 px-5 py-2 rounded-3xl text-xs h-full my-auto text-white dark:text-slate-300 border border-green-600  hover:text-green-600 hover:bg-white dark:bg-slate-800 dark:border-none dark:hover:bg-slate-100 dark:hover:text-slate-800 lg:text-base "
          onClick={() => {
            if (questionNumber < questions.length - 1) {
              setQuestionNumber(questionNumber + 1);
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
