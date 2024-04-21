// TaskInput.js
import React, { useState } from 'react';
// import './TaskInput.css';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && taskText.trim() !== ''){
      addTask(taskText);
      setTaskText(''); // Clear the input field after adding task
    }
  };

  const handleClick = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText(''); // Clear the input field after adding task
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
}

export default TaskInput;
