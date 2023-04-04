import { useDispatch, useSelector } from "react-redux";
import { valueToShare } from "../API/tasks";
import { setTasks } from "../redux";

function TaskItem({ title, desc, complete, id }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    return state.tasks;
  });

  async function handleDeleteTask(id) {
    await valueToShare.deleteTask(id);
    dispatch(setTasks(tasks.filter((task) => task.id !== id)));
  }

  async function handleCompleteTask(id, title, desc) {
    const response = await valueToShare.completeTask(id, title, desc);
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return response;
      }
      return task;
    });

    dispatch(setTasks(updatedTasks));
  }

  const handleDelete = () => {
    handleDeleteTask(id);
  };

  const handleComplete = () => {
    handleCompleteTask(id, title, desc);
  };

  return (
    <div className="task_container">
      <div>
        <div className="task_title">{!complete ? title : <s>{title}</s>}</div>
        <div className="task_desc">{!complete ? desc : <s>{desc}</s>}</div>
      </div>
      <div className="task_buttons">
        {!complete && (
          <div>
            <button className="complete" onClick={handleComplete}>
              Complete
            </button>
          </div>
        )}

        <div>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TaskItem;
