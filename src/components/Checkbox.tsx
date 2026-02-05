import styled from "styled-components";
import { Check, Trash2 } from "lucide-react";
import { useState } from "react";
import EditableText from "./EditableText";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding-left: 4px;
`;

const Label = styled.label`
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CustomCheckbox = styled.div<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 6px;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid ${({ checked }) => (checked ? "#3B82F6" : "#D1D5DB")};
  background: ${({ checked }) => (checked ? "#3B82F6" : "transparent")};

  transition: all 0.2s ease;

  svg {
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transform: scale(${({ checked }) => (checked ? 1 : 0.5)});
    transition: all 0.15s ease;
    color: white;
  }
`;

const Text = styled.span<{ checked: boolean }>`
  font-size: 16px;
  color: ${({ checked }) => (checked ? "#9CA3AF" : "#111827")};
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  transition: 0.2s;
  width: 100%;
`;

const DeleteButton = styled.button`
  margin-left: auto;
  margin-right: 4px;
  background: none;
  border: none;
  color: #d6d9dd;
  cursor: pointer;

  &:hover {
    color: #f87171;
  }
`;

type CheckboxProps = {
  checked: boolean;
  label?: string;
  editing?: boolean;
  onDelete: () => void;
  onUpdate?: (newText: string, status: boolean) => void;
};

export function Checkbox({
  checked,
  label,
  editing,
  onDelete,
  onUpdate,
}: CheckboxProps) {
  const [check, setChecked] = useState(checked);
  const [editMode, setEditMode] = useState(editing || false);

  return (
    <CheckboxContainer>
      <Label>
        <HiddenCheckbox
          checked={check}
          onChange={() => {
            setChecked(!check);
            onUpdate && onUpdate(label || "", !check);
          }}
        />
        <CustomCheckbox checked={check}>
          <Check size={14} strokeWidth={3} />
        </CustomCheckbox>
      </Label>
      {label && (
        <Text checked={check}>
          <EditableText
            text={label}
            mode="task"
            editMode={editMode}
            onClick={() => setEditMode(true)}
            onBlur={(newText) => {
              setEditMode(false);
              onUpdate && onUpdate(newText, check);
            }}
          />
        </Text>
      )}
      <DeleteButton onClick={onDelete}>
        <Trash2 />
      </DeleteButton>
    </CheckboxContainer>
  );
}
