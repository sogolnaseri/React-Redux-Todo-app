export const addTaskAction = (task) => {
    return {
      type: "ADD_TODO",
      payload: {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      },
    };
  };
  
  export const deleteTaskAction = (task) => {
    return {
      type: "DELETE_TODO",
      payload: task,
    };
  };
  
  export const completeTaskAction = (task) => {
    return {
      type: "COMPLETE_TODO",
      payload: task,
    };
  };