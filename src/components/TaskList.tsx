import { styled } from "styled-components";
import { useState } from "react";
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
  editing: boolean;
};

function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, text: "Primeira tarefa", editing: false },
    { id: 2, text: "Segunda tarefa", editing: false },
  ]);

  function handleAddTask() {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: "Nova tarefa",
        editing: true,
      },
    ]);
  }

  function handleDeleteTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <Task
          id={task.id}
          text={task.text}
          editing={task.editing}
          onDelete={handleDeleteTask}
        />
      ))}

      <AddTask onClick={handleAddTask} />
    </StyledTaskList>
  );
}

export default TaskList;
