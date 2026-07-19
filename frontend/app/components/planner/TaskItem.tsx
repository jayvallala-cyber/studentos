"use client";

import Button from "../ui/Button";
import { Task } from "../../types/task";

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4">

      <div className="flex items-center gap-4">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5"
        />

        <span
          className={`text-lg ${
            task.completed
              ? "line-through text-slate-500"
              : "text-white"
          }`}
        >
          {task.title}
        </span>

      </div>

      <Button
        text="Delete"
        variant="secondary"
        onClick={() => onDelete(task.id)}
      />

    </div>
  );
}