import DashNav from "../components/Dashboard/DashNav";
import SurveyList from "../components/Dashboard/SurveyList";

function Dashboard() {
  return (
    <div className="dark:text-slate-200 md:w-2/3 mx-auto w-5/6 ">
      <DashNav></DashNav>
      <SurveyList></SurveyList>
    </div>
  );
}

export default Dashboard;
