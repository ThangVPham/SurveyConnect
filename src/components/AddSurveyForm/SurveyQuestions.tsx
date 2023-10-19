import React from "react";
import SingleQuesiton from "./SingleQuesiton";
interface ISurveyQuestions {
  questions: IQuestion[];
  setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>;
  validInputFields: IValidInputFields;
}
interface IValidInputFields {
  suvreyName: boolean;
  dateEnd: boolean;
  questionsLength: boolean;
  questionsCheck: boolean;
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

function SurveyQuestions({ questions, setQuestions, validInputFields }: ISurveyQuestions) {
  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-6 mt-10">
      {questions.map((question, index) => {
        return (
          <SingleQuesiton
            q={question}
            key={question.id}
            index={index}
            setQuestions={setQuestions}
            validInputFields={validInputFields}
          ></SingleQuesiton>
        );
      })}
    </div>
  );
}

export default SurveyQuestions;
