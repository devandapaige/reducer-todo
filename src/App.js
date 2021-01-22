import React from "react";
import TodoForm from "./components/TodoForm";
import "../src/App.css";
function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <p>add your own to-dos to the list and click them once complete</p>
      <TodoForm />
    </div>
  );
}

export default App;
