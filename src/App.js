// App.js
import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [lastTaskName, setLastTaskName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertColor, setAlertColor] = useState("");

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setLastTaskName(text);
    setAlertColor("#007bff"); // Blue color for add alert
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000); // Hide the alert after 3 seconds
  };

  const deleteTask = (taskId, taskName) => {
    const deletedTask = tasks.find((task) => task.id === taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
    setLastTaskName(deletedTask ? deletedTask.text : ""); // Set last task name for the alert
    setAlertColor("#dc3545"); // Red color for delete alert
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000); // Hide the alert after 3 seconds
  };

  const toggleTask = (taskId, taskName) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    setLastTaskName(taskName);
    setAlertColor("#28a745"); // Green color for complete alert
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000); // Hide the alert after 3 seconds
  };

  return (
    <div className="app">
      <h1 className="title">React To-Do App</h1>
      <TaskInput addTask={addTask} />
      {showAlert && (
        <div className="alert" style={{ backgroundColor: alertColor }}>
          Task "{lastTaskName}"{" "}
          {alertColor === "#28a745"
            ? "completion status changed!"
            : alertColor === "#007bff"
            ? "added successfully!"
            : "deleted!"}
        </div>
      )}
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
