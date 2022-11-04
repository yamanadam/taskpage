import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";

const Tasks = ({ data, setData }) => {
  const handleDelete = (id) => {
    const arr = data.filter((item) => item.id !== id);
    setData(arr);
  };

  const handleDiv = (e) => {
    e.target.parentElement.classList.toggle("line");
  };

  return (
    <div className="tasks d-flex flex-column align-items-center mt-3  ">
      {data?.map((item) => {
        return (
          <div
            key={item.id}
            className=" task d-flex justify-content-between mb-1   p-2 "
            onClick={handleDiv}
          >
            <div>
              <p>{item.task}</p>
              <p>{item.date}</p>
            </div>
            <div>
              <TiDelete
                size={23}
                className="text-danger"
                type="button"
                onClick={(e) => handleDelete(item.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
