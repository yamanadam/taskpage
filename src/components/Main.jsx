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

  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center p-5">
      <Header show={show} setShow={setShow} />
      {show && (
        <AddTask
          tasks={tasks}
          setTasks={setTasks}
          setData={setData}
          data={data}
        />
      )}
      <Tasks data={data} setData={setData} />
    </div>
  );
};

export default Main;
