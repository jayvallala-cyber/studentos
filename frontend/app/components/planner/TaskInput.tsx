"use client";

import Input from "../ui/Input";
import Button from "../ui/Button";

type TaskInputProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
};

export default function TaskInput({
  value,
  onChange,
  onAdd,
}: TaskInputProps) {
  return (
    <div className="flex gap-4 items-end">
      <div className="flex-1">
        <Input
          label="New Task"
          value={value}
          placeholder="Enter your task..."
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

      <Button
        text="Add Task"
         onClick={onAdd}
      />
    </div>
  );
}