// TaskList.js
import React from 'react';
import './TaskList.css';

const colors = ['#F0F4C3', '#B2DFDB']; // Define 2 colors for background

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id} style={{ backgroundColor: colors[index % colors.length] }}>
            <span onClick={() => toggleTask(task.id, task.text)} className={task.completed ? "task-text completed" : "task-text"}>
              {task.text}
            </span>
            <div className="task-actions">
              <button className="complete-button" onClick={() => toggleTask(task.id, task.text)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
