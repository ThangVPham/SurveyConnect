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
function SurveyList({ surveys }: SurveyListProps) {
  return (
    <div>
      {surveys?.map((survey) => {
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
    </div>
  );
}

export default SurveyList;
