import { styled } from "styled-components";
import { Checkbox } from "./Checkbox";

const CheckboxStyled = styled.div`
  padding: 12px 6px;
  border-radius: 8px;

  transition:
    background 0.15s ease,
    color 0.15s ease,
    transform 0.1s ease;

  &:hover {
    background: #f3f4f6;
    color: #111827;
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.98);
  }
  &:focus-visible {
    outline: 2px solid #3b82f6;
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
        onUpdate={(newText, newStatus) =>
          onUpdate && onUpdate(id, newText, newStatus)
        }
      />
    </CheckboxStyled>
  );
}

export default Task;
