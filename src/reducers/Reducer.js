import redux from "redux";

const initialState = {
  todoList: [
    {
      todo: "example: Do Laundry",
      id: 1528817077286,
      completed: true,
    },
    {
      todo: "example: empty dishwasher",
      id: 1528817084358,
      completed: true,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        ),
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.completed === false),
      };
    default:
      return state;
  }
};
export default { reducer, initialState };
