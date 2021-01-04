import React from "react";

const Todo = (props) => {
  return (
    <div
      className={props.item.completed ? "completed" : ""}
      onClick={(e) =>
        props.dispatch({ type: "TOGGLE_COMPLETE", id: props.item.id })
      }
    >
      <p>☐ {props.item.item}</p>
    </div>
  );
};

export default Todo;
