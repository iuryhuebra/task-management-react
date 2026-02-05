import { styled } from "styled-components";
import { useState, useEffect } from "react";
import Task from "./Task";
import AddTask from "./AddTask";

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  overflow-y: auto;
  padding-right: 6px;
  height: calc(70vh - 112px);

  scrollbar-width: thin;
  scrollbar-color: rgba(107, 114, 128, 0.4) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(107, 114, 128, 0.4);
    border-radius: 8px;
    transition: background 0.2s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(107, 114, 128, 0.65);
  }
`;

type TaskType = {
  id: number;
  text: string;
  status: boolean;
  editing: boolean;
};

function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored
      ? JSON.parse(stored)
      : [
          { id: 1, text: "Primeira tarefa", editing: false, status: false },
          { id: 2, text: "Segunda tarefa", editing: false, status: false },
        ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask() {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: "Nova tarefa",
        editing: true,
        status: false,
      },
    ]);
  }

  function handleDeleteTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function handleUpdateTask(id: number, newText: string, status: boolean) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, text: newText, status } : task,
      ),
    );
  }

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <Task
          id={task.id}
          status={task.status}
          text={task.text}
          editing={task.editing}
          onDelete={handleDeleteTask}
          onUpdate={handleUpdateTask}
        />
      ))}

      <AddTask onClick={handleAddTask} />
    </StyledTaskList>
  );
}

export default TaskList;
