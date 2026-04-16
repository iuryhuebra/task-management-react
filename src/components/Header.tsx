import styled from "styled-components";
import { Pencil } from "lucide-react";
import EditableText from "./EditableText";
import { useState } from "react";

const StyledHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  width: 100%;
  padding: 4px 4px 22px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  margin-bottom: 18px;
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 42px;
  min-height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(255, 255, 255, 0.7);
  color: #64748b;

  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #ffffff;
    color: #0f172a;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
  }
  &:active {
    transform: scale(0.98);
  }
  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

const Meta = styled.p`
  margin-top: 6px;
  color: #64748b;
  font-size: 0.92rem;
  line-height: 1.4;
`;

function Header() {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState<string>(
    localStorage.getItem("title") || "Task Flow",
  );

  return (
    <StyledHeader>
      <div>
        <EditableText
          text={title}
          editMode={editMode}
          onClick={() => setEditMode(true)}
          onBlur={(newText) => {
            const nextTitle = newText.trim() || "Task Flow";
            setEditMode(false);
            setTitle(nextTitle);
            localStorage.setItem("title", nextTitle);
          }}
          mode="header"
        />
        <Meta>
          Organize suas tarefas, edite com rapidez e acompanhe seu fluxo em
          uma interface limpa e pronta para portifolio.
        </Meta>
      </div>

      <EditButton onClick={() => setEditMode(true)}>
        <Pencil size={20} />
      </EditButton>
    </StyledHeader>
  );
}

export default Header;
