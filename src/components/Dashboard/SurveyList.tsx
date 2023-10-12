import SurveyListItem from "./SurveyListItem";
import surveys from "../../../public/surveys/surveys.json";
function SurveyList() {
  return (
    <div>
      {surveys.map((survey) => {
        return (
          <SurveyListItem
            key={survey.id}
            id={survey.id}
            surveyName={survey.surveyName}
            organization={survey.organization}
            description={survey.description}
            activeStatus={false}
            dateEnd={survey.dateEnd}
          ></SurveyListItem>
        );
      })}
    </div>
  );
}

export default SurveyList;
