import { useState } from "react";
import { setTasks } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { valueToShare } from "../API/tasks";

function Inputs() {
  const dispatch = useDispatch();
  const [TitleTerm, SetTitleTerm] = useState("");
  const [DecsTerm, SetDecsTerm] = useState("");

  const tasks = useSelector((state) => {
    return state.tasks;
  });

  async function handleCreateTask(title, desc) {
    const NewTask = await valueToShare.createTask(title, desc);
    const updatedTasks = [...tasks, NewTask];
    dispatch(setTasks(updatedTasks));
  }

  const handleTitle = (event) => {
    SetTitleTerm(event.target.value);
  };
  const handleDecs = (event) => {
    SetDecsTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (TitleTerm === "" && DecsTerm === "") {
      alert("Inputs cannot be emty");
      return;
    } else {
      handleCreateTask(TitleTerm, DecsTerm);
      SetTitleTerm("");
      SetDecsTerm("");
    }
  };

  return (
    <div className="inputs_container">
      <h1 className="title">My ToDos</h1>
      <form>
        <div className="inputs">
          <div>
            <div className="input">
              <label>Name</label>
              <input onChange={handleTitle} value={TitleTerm} />
            </div>
            <div className="input">
              <label>Description</label>
              <input onChange={handleDecs} value={DecsTerm} />
            </div>
          </div>
          <div className="submit">
            <button onClick={handleSubmit}>Add Task</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Inputs;
