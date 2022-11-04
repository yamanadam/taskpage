import AddTask from "./AddTask";
import Header from "./Header";
import Tasks from "./Tasks";
import { useState } from "react";

const Main = () => {
  const [show, setShow] = useState(true);
  const [tasks, setTasks] = useState({
    id: new Date().getTime(),
    task: "",
    date: "",
  });

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("TODOS")) || []
  );

  return <div>Main</div>;
};

export default Main;
