import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";
import EditTask from "./pages/EditTask";
import About from "./pages/About";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function removerTarefa(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard tasks={tasks} />}
        />

        <Route
          path="/tasks"
          element={
            <Tasks
              tasks={tasks}
              removerTarefa={removerTarefa}
            />
          }
        />

        <Route
          path="/create-task"
          element={
            <CreateTask
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />

         <Route
              path="/task-details/:id"
              element={<TaskDetails tasks={tasks} />}
          /><Route
          
            path="/edit-task/:id"
            element={
            <EditTask
            tasks={tasks}
            setTasks={setTasks}
    />
  }
/>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;