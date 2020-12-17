export const todo = [
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
];

export default const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    todo: action.payload,
                    id: Date.now(),
                    completed: false,
                }
            ]
            case "TOGGLE_COMPLETE":
                return state.map(todo => {
                    
                })
    }
}