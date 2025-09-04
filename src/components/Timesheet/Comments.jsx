import CommentsTable from "../inputs/Table"
import "./comments.css";
const columns = [
  { key: "date", header: "Date" },
  { key: "task", header: "Project Task" },
  { key: "role", header: "Role" },
  { key: "activity", header: "Activity" },
  { key: "hours", header: "Hours" },
  { key: "comments", header: "Comments" },
];

const data = [
  {
    date: "15 Jan",
    task: "Project 1",
    role: "Specialist",
    activity: "Development",
    hours: "8.00",
    comments: "Prepared a presentation for CEO"
  },
  {
    date: "16 Jan",
    task: "Project 2",
    role: "Specialist",
    activity: "Development",
    hours: "8.00",
    comments: "Planned employees vacations"
  }
];

function Comments(){
    return (
        <div className="comments-box"><CommentsTable columns={columns} data={data} title="Comments" /></div>
    )
}

export default Comments;