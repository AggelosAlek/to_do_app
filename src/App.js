import Inputs from "./components/Inputs";
import Task from "./components/Task";
import { useEffect } from "react";
import { valueToShare } from "./API/tasks";
import { setTasks } from "./redux";
import { useDispatch } from "react-redux/es/exports";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getTasks() {
      const fetchedTasks = await valueToShare.fetchTasks();
      dispatch(setTasks(fetchedTasks));
    }
    getTasks();
  }, []);

  return (
    <div>
      <Inputs />
      <Task />
    </div>
  );
}

export default App;
