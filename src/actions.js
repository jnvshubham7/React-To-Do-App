// actions.js
export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: {
      text
    }
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: {
      taskId
    }
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: {
      taskId
    }
  });
  