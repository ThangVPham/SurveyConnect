import SurveyForm from "../components/SurveyForm/SurveyForm";
import Footer from "../components/Footer";
function SurveyQuestions() {
  return (
    <div className="flex flex-col items-center h-full">
      <SurveyForm></SurveyForm>
      <Footer></Footer>
    </div>
  );
}

export default SurveyQuestions;
