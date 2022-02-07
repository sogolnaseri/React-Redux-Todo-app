const initialState = { taskList: [] };

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, taskList: [...state.taskList, action.payload] };
    case "DELETE_TODO":
      const newTodos = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
      return { ...state, taskList: newTodos };
    case "COMPLETE_TODO":
      const updatedTodos = state.taskList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isCompleted: true,
          };
        }
        return todo;
      });
      return { ...state, taskList: updatedTodos };
    default:
      return state;
  }
};