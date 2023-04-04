import TaskItem from "./TaskItem";
import { useSelector } from "react-redux/es/exports";

function Task() {
  const tasks = useSelector((state) => {
    return state.tasks;
  });

  const renderedItems = tasks.map((task) => {
    return (
      <TaskItem
        title={task?.title}
        desc={task?.desc}
        complete={task?.completed}
        id={task?.id}
        key={task?.id}
      />
    );
  });

  return <div className="task_list">{renderedItems}</div>;
}

export default Task;
