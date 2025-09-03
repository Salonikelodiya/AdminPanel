import TimeTable from "./TimeTable"
import FindTraining from"./FindTraining";
import TimeTableAicon from "../../assets/TimetableActive.svg"
import TimeTableDicon from "../../assets/TimeTableDeactive.svg"
import FindTrainingAicon from "../../assets/AllSearchActive.svg"
import FindTrainingDicon from "../../assets/AllSearchDeactive.svg"
import FeedAicon from "../../assets/FileActive.svg";
import FeedDicon from "../../assets/FileDeactive.svg"
import PassedQuizzesTable from "./PassedQuizzesTable";
import  QuizzesAicon from "../../assets/QueryActive.svg"
import QuizzesDicon  from "../../assets/QueryDeactive.svg"
import RegisterA from  "../../assets/Trai_Regi_Active.svg"
import  RegisterD from "../../assets/Trai_Regi_Deactive.svg"
import Registeration from "./Registeration";
import Tabs from  "../Tabs";
import Feedback from "./Feedback"

function TrainingMain(){
    const tabs = [
      {
        label: "Training timeTable",
        icon: { active: TimeTableAicon, deactive: TimeTableDicon },
        component: (<TimeTable/>)
        
      },
      {
       label: "Findtraing ",
       icon: { active: FindTrainingAicon, deactive: FindTrainingDicon },
      component: (<FindTraining/>),
      },
      {
        label: "Feedback",
        icon: { active: FeedAicon, deactive: FeedDicon },
        component: <Feedback/>
      },
      {
        label: "Quizzes",
        icon: { active: QuizzesAicon, deactive: QuizzesDicon },
        component: <PassedQuizzesTable/>
      },
      {
        label: "Training Registration",
        icon: { active: RegisterA, deactive: RegisterD },
        component: <Registeration/>
      }

    ];
    return <Tabs tabs={tabs} defaultTab={0} />;

}
export default TrainingMain;