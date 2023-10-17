import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface IQuestion {
  id: number;
  questionType: string;
  question: string;
  options: string[];
  correctOption: string;
  imgURL: string[];
  imgDesc: string[];
}
interface ISingleQuestion {
  q: IQuestion;

  index: number;
  setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>;
}
function SingleQuesiton({ q, index, setQuestions }: ISingleQuestion) {
  const [question, setQuestion] = useState<IQuestion>(q);
  useEffect(() => {
    setQuestions((prevState) => {
      prevState.splice(index, 1, question);
      return [...prevState];
    });
  }, [question]);
  return (
    <div className="w-11/12 flex flex-col rounded-lg dark:border-slate-200  dark:bg-transparent bg-white border border-t-6 items-start justify-center mx-auto gap-8 p-4 mb-4 shadow-2xl">
      <div className="flex flex-col gap-4 w-full">
        <select
          name="questionType"
          id="questionType"
          className="dark:bg-[#0F2746] w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 border-slate-400 border outline-none dark:text-slate-400 rounded-lg py-1  bg-green-600 text-white"
          value={question.questionType}
          onChange={(e) => {
            setQuestion((prevState: IQuestion) => {
              console.log("setQuestion");
              return { ...prevState, questionType: e.target.value };
            });
          }}
        >
          <option value="MC">Multiple Choice</option>
          <option value="Checkbox">Checkbox</option>
          <option value="Short Answer">Short Answer</option>
          <option value="Long Feedback">Long Feedback</option>
        </select>
        <input
          type="text"
          name="question"
          placeholder={`Q${index + 1}. Enter your question`}
          className=" h-full border-0 border-b-2 dark:bg-transparent px-2 w-full text-[20px] outline-none mt-2 border-green-600 dark:border-slate-400"
          value={question.question}
          onChange={(e) => {
            setQuestion((prevState: IQuestion) => {
              return { ...prevState, question: e.target.value };
            });
          }}
        />

        <div className="xl:flex">
          <div className="flex flex-col gap-2 w-full xl:w-1/2">
            {question.options.map((option, i) => {
              return (
                <div className="flex flex-col w-full " key={i}>
                  <div className=" flex w-full justify-between items-center">
                    <input
                      type="text"
                      className="dark:bg-transparent border-slate-400 border rounded-md p-1 w-full outline-none"
                      placeholder={`Option ${i + 1}`}
                      value={option}
                      onChange={(e) => {
                        setQuestion((prevState) => {
                          prevState.options[i] = e.target.value;
                          return { ...prevState, options: prevState.options };
                        });
                      }}
                    />
                    {question.options.length > 1 && (
                      <FontAwesomeIcon
                        icon={faRemove}
                        className="p-2 cursor-pointer"
                        onClick={() => {
                          setQuestion((prevState) => {
                            prevState.options.splice(i, 1);
                            return { ...prevState, options: prevState.options };
                          });
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-end xl:mx-auto mt-5 flex gap-5 justify-end w-full">
            <button
              className="border px-4 rounded-2xl dark:hover:text-slate-900 dark:hover:bg-slate-200 transition-bg duration-300 dark:border-slate-200 bg-green-600 text-slate-100 border-green-600 dark:bg-transparent hover:text-green-600 hover:bg-white h-[35px] text-xs"
              onClick={() => {
                setQuestion((prevState) => {
                  const newOptions = [...prevState.options, ""];
                  return { ...prevState, options: newOptions };
                });
              }}
            >
              Add Option
            </button>
            <button
              className="border px-4 rounded-2xl dark:hover:text-slate-900 dark:hover:bg-slate-200 transition-bg duration-300 dark:border-slate-200 bg-green-600 text-slate-100 border-green-600 dark:bg-transparent hover:text-green-600 hover:bg-white h-[35px] text-xs"
              onClick={() => {
                setQuestions((prevState) => {
                  const questions = prevState.filter((question, i) => {
                    if (i !== index) {
                      return question;
                    }
                  });
                  return [...questions];
                });
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleQuesiton;
