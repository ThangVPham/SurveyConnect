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
      {!loading &&
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
            ></SurveyListItem>
          );
        })}
      {loading && (
        <div className="flex flex-col items-center justify-center gap-2 h-96">
          <img src="./assets/loading-gif.gif" alt="Loading GIF" className="w-[25px]" />
          <p>Loading</p>
        </div>
      )}
    </div>
  );
}

export default SurveyList;
