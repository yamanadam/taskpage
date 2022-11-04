import { useEffect } from "react";

const AddTask = ({ tasks, setTasks, setData, data }) => {
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();

    setData([...data, tasks]);

    setTasks({
      id: new Date().getTime(),
      task: "",
      date: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(data));
  });

  return (
    <form onSubmit={handleSubmit} className="form-control text-center p-3 ">
      <div>
        <label htmlFor="task">Task</label> <br />
        <input
          required
          type="text"
          id="task"
          onChange={(e) => setTasks({ ...tasks, task: e.target.value })}
          value={tasks.task}
        />
      </div>
      <div>
        <label className="text-start" htmlFor="date">
          Day-Time
        </label>{" "}
        <br />
        <input
          required
          type="datetime-local"
          name="date"
          id="date"
          onChange={(e) => setTasks({ ...tasks, date: e.target.value })}
          value={tasks.date}
        />
      </div>
      <button className="btn btn-success mt-2" type="submit">
        Save Task
      </button>
    </form>
  );
};

export default AddTask;
