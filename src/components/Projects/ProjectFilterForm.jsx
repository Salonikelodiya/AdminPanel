import SearchIconActive from '../../assets/AllSearchActive.svg';
import SearchIconDeactive from '../../assets/AllSearchDeactive.svg';
import ArchiveActive from "../../assets/ArchiveActive.svg"
import ArchiveDeactive from '../../assets/ArchiveDeactive.svg';
import AccountActive from '../../assets/AccountDeActive.svg';
import AccountDeactive from '../../assets/AccountDeActive.svg';
import ProjectFilterFormContent from './ProjectFilterFormContent';
import Account from "./Account";
import Tabs from "../Tabs"
import AllProjects from "./AllProjects";
 

export default function ProjectFilterForm(startDateFrom,
  setStartDateFrom,
  finishDateFrom,
  setFinishDateFrom,
  handleSearch,
  handleClear){
const tabs = [
  {
    label: "Find person",
    icon: { active: SearchIconActive, deactive: SearchIconDeactive },
    component: (
      <ProjectFilterFormContent
        startDateFrom={startDateFrom}
        setStartDateFrom={setStartDateFrom}
        finishDateFrom={finishDateFrom}
        setFinishDateFrom={setFinishDateFrom}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
    ),
  },
  {
   label: "All projects",
   icon: { active: ArchiveActive, deactive: ArchiveDeactive },
  component: (<AllProjects/>),
  },
  {
    label: "Account",
    icon: { active: AccountActive , deactive: AccountDeactive },
    component: <Account/>
  }
];
return <Tabs tabs={tabs} defaultTab={0} />;
}