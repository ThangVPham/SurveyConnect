import Footer from "../components/Footer";
import PublicSurveyForm from "../components/SurveyForm/PublicSurveyForm";
function SurveyQuestionsPublic() {
  return (
    <div className="flex flex-col items-center h-full">
      <PublicSurveyForm></PublicSurveyForm>
      <Footer></Footer>
    </div>
  );
}

export default SurveyQuestionsPublic;
