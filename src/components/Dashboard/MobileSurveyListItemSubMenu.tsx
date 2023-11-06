interface MobileSurveyListItemSubMenuProps {
  subMenuToggled: boolean;
  triggerToast: () => void;
  id: string;
  DeleteSurvey(id: string): Promise<boolean>;
  SetSurvey: React.Dispatch<React.SetStateAction<SurveyItem[] | null>>;
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
function MobileSurveyListItemSubMenu({
  id,
  subMenuToggled,
  triggerToast,
  DeleteSurvey,
  SetSurvey,
}: MobileSurveyListItemSubMenuProps) {
  return (
    <div
      className={
        subMenuToggled
          ? "w-20 h-28 border-2 dark:border-slate-400 absolute rounded-xl right-2 top-0 justify-between overflow-hidden transition-h duration-300 dark:bg-slate-900/90 z-50 bg-green-700 text-sky-100 border-1 border-slate-100"
          : "w-0 h-0 border-2 border-slate-400 absolute rounded-xl right-2 top-0 justify-between overflow-hidden border-opacity-0 transition-h duration-300 z-50"
      }
    >
      <div className="border-b h-1/4 hover:bg-green-600 dark:hover:bg-slate-500 pt-1">Lock</div>
      <div
        className="border-b h-1/4 hover:bg-green-600 dark:hover:bg-slate-500 pt-1"
        onClick={() => {
          navigator.clipboard.writeText(`https://surveyconnect-frontend.onrender.com/#/user/surveydetail/${id}`);
          triggerToast();
        }}
      >
        Share
      </div>
      <div className="border-b hover:bg-green-600 h-1/4 dark:hover:bg-slate-500 pt-1">Edit</div>
      <div
        className="h-1/4 hover:bg-green-600 dark:hover:bg-slate-500 pt-1"
        onClick={async () => {
          console.log("deleting");
          const result = await DeleteSurvey(id);
          if (result) {
            SetSurvey((prevState) => {
              if (prevState) {
                const surveyIndex = prevState?.findIndex((survey) => survey._id === id) ?? -1;
                console.log(surveyIndex);
                if (surveyIndex > -1) {
                  prevState?.splice(surveyIndex, 1);
                }
                return [...prevState];
              }
              return [];
            });
          } else {
            console.log("Unable to delete survey");
          }
        }}
      >
        Delete
      </div>
    </div>
  );
}

export default MobileSurveyListItemSubMenu;
