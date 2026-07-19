"use client";

import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import ProgressCard from "./ProgressCard";
import { Task } from "../../types/task";

export default function Planner() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;

    const task: Task = {
      id: crypto.randomUUID(),
      title: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function toggleTask(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="space-y-6">

      <TaskInput
        value={newTask}
        onChange={setNewTask}
        onAdd={addTask}
      />

      <ProgressCard
        completed={completed}
        total={tasks.length}
      />

      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-center text-slate-400">
            No tasks yet. Add your first task!
          </p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>

    </div>
  );
}