import { styled } from "styled-components";
import { Checkbox } from "./Checkbox";

const CheckboxStyled = styled.div`
  padding: 12px 6px;
  border-radius: 18px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: rgba(255, 255, 255, 0.74);

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(96, 165, 250, 0.22);
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07);
  }
  &:active {
    transform: scale(0.98);
  }
  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

interface TaskProps {
  id: number;
  text?: string;
  editing?: boolean;
  status: boolean;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string, status: boolean) => void;
}

function Task({ id, text, editing, status, onDelete, onUpdate }: TaskProps) {
  return (
    <CheckboxStyled>
      <Checkbox
        checked={status}
        label={text}
        editing={editing}
        onDelete={() => onDelete(id)}
        onUpdate={(newText, newStatus) => onUpdate(id, newText, newStatus)}
      />
    </CheckboxStyled>
  );
}

export default Task;
