import SurveyListItem from "./SurveyItem";

interface SurveyListProps {
  surveys: SurveyItem[] | null;
  loading: boolean;
  error: Error | null;
}
interface SurveyItem {
  _id: string;
  surveyName: string;
  organization: string;
  description: string;
  activeStatus: boolean;
  dateEnd: string;
  questions: Question[];
  responses: [
    {
      question: string;
      answer: string[];
    }
  ];
}
interface Question {
  questionType: string;
  question: string;
  options: string[];
  correctOption: string | null;
  imgURL: string[];
  imgDesc: string[];
}
function SurveyList({ surveys, loading }: SurveyListProps) {
  return (
    <div>
      {loading && (
        <div className="flex flex-col items-center justify-center gap-2 h-96">
          <img src="./assets/loading-gif.gif" alt="Loading GIF" className="w-[25px]" />
          <p>Loading</p>
        </div>
      )}
      {!loading && surveys && surveys.length === 0 && (
        <div className="flex justify-center mt-20">
          <p>You don't currently have any survey.</p>
        </div>
      )}
      {!loading &&
        surveys &&
        surveys?.length > 0 &&
        surveys?.map((survey) => {
          return (
            <SurveyListItem
              key={survey._id}
              _id={survey._id}
              surveyName={survey.surveyName}
              organization={survey.organization}
              description={survey.description}
              activeStatus={true}
              dateEnd={survey.dateEnd}
              questions={survey.questions}
              responses={survey.responses}
            ></SurveyListItem>
          );
        })}
    </div>
  );
}

export default SurveyList;
