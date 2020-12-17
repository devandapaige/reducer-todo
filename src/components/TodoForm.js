import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [todo, setTodo] = useState("");

  const handleChanges = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
    setTodo("");
  };
  const handleClear = (event) => {
    event.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  };
  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <input placeholder="To-Do..." onChange={handleChanges} value={todo} />
        <button className="addNew">Add</button>
        <br />
      </form>
      <button className="clear" onClick={handleClear}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoForm;
