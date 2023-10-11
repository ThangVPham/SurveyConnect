import SingleSurvey from "./SingleSurvey";
import surveys from "../../../public/surveys/surveys.json";
function SurveyList() {
  return (
    <div>
      {surveys.map((survey) => {
        return (
          <SingleSurvey
            key={survey.id}
            id={survey.id}
            surveyName={survey.surveyName}
            organization={survey.organization}
            description={survey.description}
            activeStatus={false}
            dateEnd={survey.dateEnd}
            instructionMessage={survey.instructionMessage}
            questions={survey.questions}
          ></SingleSurvey>
        );
      })}
    </div>
  );
}

export default SurveyList;
