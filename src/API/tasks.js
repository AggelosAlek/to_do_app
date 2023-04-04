import axios from "axios";

const fetchTasks = async () => {
  const response = await axios.get("http://localhost:3001/tasks");

  return response.data;
};

const completeTask = async (id, title, desc) => {
  const response = await axios.put(`http://localhost:3001/tasks/${id}`, {
    title: title,
    desc: desc,
    completed: true,
  });

  return response.data;
};

const deleteTask = async (id) => {
  await axios.delete(`http://localhost:3001/tasks/${id}`);
};

const createTask = async (title, desc) => {
  const response = await axios.post("http://localhost:3001/tasks", {
    title: title,
    desc: desc,
    completed: false,
  });

  return response.data;
};

const valueToShare = {
  createTask,
  fetchTasks,
  deleteTask,
  completeTask,
};

export { valueToShare };
