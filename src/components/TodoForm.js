import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/Reducer";
import Todo from "./Todo";

function TodoForm() {
  const [state, dispatch] = useReducer( reducer, initialState );
  const [currentValue, setCurrentValue] = useState("");
  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentValue !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: { item: currentValue, id: Date.now(), completed: false },
      });
    }
    setCurrentValue("");
  };
  const handleClear = (e) => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={currentValue} onChange={handleChange} />
        <button type="submit">+</button>
        <button className="clear" onClick={handleClear}>
          Clear Completed
        </button>
      </form>
      <div className="todoList">
        {state.todoList.map((item) => {
          return <Todo dispatch={dispatch} key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default TodoForm;
