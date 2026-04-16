import { styled } from "styled-components";
import { useState, useEffect } from "react";
import Task from "./Task";
import AddTask from "./AddTask";

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow-y: auto;
  padding-right: 4px;
  flex: 1;
  min-height: 0;

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

const EmptyState = styled.div`
  display: grid;
  place-items: center;
  min-height: 320px;
  border: 1px dashed rgba(148, 163, 184, 0.35);
  border-radius: 22px;
  background: rgba(248, 250, 252, 0.72);
  color: #475569;
  text-align: center;
  padding: 24px;
`;

const EmptyTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
`;

const EmptyText = styled.p`
  max-width: 360px;
  line-height: 1.55;
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
          {
            id: 1,
            text: "Explore a interface e personalize este fluxo",
            editing: false,
            status: false,
          },
          {
            id: 2,
            text: "Adicione novas tarefas para testar a experiencia",
            editing: false,
            status: false,
          },
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

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;

      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (isTyping) return;

      if (e.key === "Enter") {
        e.preventDefault();
        handleAddTask();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <StyledTaskList>
      {tasks.length === 0 ? (
        <EmptyState>
          <div>
            <EmptyTitle>Sua lista esta vazia</EmptyTitle>
            <EmptyText>
              Clique no botao de adicionar ou pressione Enter fora de um campo
              de texto para criar sua primeira tarefa.
            </EmptyText>
          </div>
        </EmptyState>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            status={task.status}
            text={task.text}
            editing={task.editing}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
          />
        ))
      )}

      <AddTask onClick={handleAddTask} />
    </StyledTaskList>
  );
}

export default TaskList;
