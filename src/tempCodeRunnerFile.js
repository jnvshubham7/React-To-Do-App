
// TaskList.js
import React from 'react';

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTask(task.id)} className="task-text">
              {task.text}
            </span>
            <div className="task-actions">
              <button className="complete-button" onClick={() => toggleTask(task.id)}>
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






















// // TaskList.js
// import React from 'react';

// function TaskList({ tasks, deleteTask, toggleTask }) {
//   return (
//     <div className="task-list">
//       <h2>Tasks</h2>
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id} className={task.completed ? 'completed' : ''}>
//             <span onClick={() => toggleTask(task.id)}>
//               {task.completed ? '✔️' : '⭕'} {task.text}
//             </span>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TaskList;
