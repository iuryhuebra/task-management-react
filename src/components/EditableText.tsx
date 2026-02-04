import { useRef, useEffect } from "react";
import styled from "styled-components";

const Input = styled.div<{ mode?: "header" | "task" }>`
  font-size: ${({ mode }) => (mode === "header" ? "24px" : "16px")};
  font-weight: ${({ mode }) => (mode === "header" ? "600" : "400")};
  border: 1px solid transparent;
  outline: none;

  min-width: 90%;
  padding-bottom: 8px;

  &:focus {
    border-bottom-color: #e5e7eb;
  }
`;
interface EditableTextProps extends React.HTMLAttributes<HTMLInputElement> {
  text: string;
  editMode: boolean;
  mode?: "header" | "task";
}

function EditableText({
  text,
  editMode,
  mode,
  onBlur,
  onClick,
}: EditableTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editMode || !ref.current) return;

    const el = ref.current;

    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(el);
    range.collapse(false);

    selection?.removeAllRanges();
    selection?.addRange(range);
  }, [editMode]);

  return (
    <Input
      ref={ref}
      tabIndex={0}
      mode={mode}
      contentEditable={editMode}
      suppressContentEditableWarning
      onBlur={onBlur}
      onClick={onClick}
      spellCheck={false}
    >
      {text}
    </Input>
  );
}

export default EditableText;
