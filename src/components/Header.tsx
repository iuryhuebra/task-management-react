import styled from "styled-components";
import { Pencil } from "lucide-react";
import EditableText from "./EditableText";
import { useState } from "react";

const StyledHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 25px 8px 40px 16px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 16px;
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  border: 2px transparent solid;
  background: none;
  padding: 4px;
  margin-bottom: 8px;
  color: #d6d9dd;

  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    transform 0.1s ease;

  &:hover {
    background: #f3f4f6;
    color: #111827;
  }
  &:active {
    transform: scale(0.98);
  }
  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
`;

function Header() {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState<string>(
    localStorage.getItem("title") || "Task Management",
  );

  return (
    <StyledHeader>
      <EditableText
        text={title}
        editMode={editMode}
        onClick={() => setEditMode(true)}
        onBlur={(newText) => {
          setEditMode(false);
          setTitle(newText);
          localStorage.setItem("title", newText);
        }}
        mode="header"
      />

      <EditButton onClick={() => setEditMode(true)}>
        <Pencil size={20} />
      </EditButton>
    </StyledHeader>
  );
}

export default Header;
