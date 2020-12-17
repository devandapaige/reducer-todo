import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const initialList = [
  {
    task: "example: Do Laundry",
    id: 1528817077286,
    completed: true,
  },
  {
    task: "example: empty dishwasher",
    id: 1528817084358,
    completed: true,
  },
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: initialList,
    };
  }

  handleComplete = (itemId) => {
    console.log("toggling item", itemId)
    this.setState({
      ...this.state,
      list: this.state.list.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  handleAddItem = (newItem) => {
    this.setState({
      list: [
        ...this.state.list,
        {
          task: newItem,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  clearItems = (e) => {
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => !item.completed),
    });
  };
  render() {
    return (
      <div className="app">
        <h1>To-Do App</h1>
        <TodoForm
          handleAddItem={this.handleAddItem}
          clearItems={this.clearItems}
        />
        <TodoList handleComplete={this.handleComplete} list={this.state.list} />
      </div>
    );
  }
}

export default App;
