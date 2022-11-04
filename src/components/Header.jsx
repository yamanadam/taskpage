import React from "react";

const Header = ({ show, setShow }) => {
  return (
    <div>
      <h1>Task Tracker</h1>
      <button onClick={() => setShow(!show)} className="btn btn-danger mb-2 ">
        {show ? "Close" : "Show"} Add Task Bar
      </button>
    </div>
  );
};

export default Header;
