import { ListPlus } from "lucide-react";
import { styled } from "styled-components";

const StyledContainerAddTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 6px;
  border: 2px transparent solid;
  border-radius: 8px;
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
  }
`;

function AddTask({ onClick }: { onClick?: () => void }) {
  return (
    <StyledContainerAddTask onClick={onClick}>
      <ListPlus size={20} />
    </StyledContainerAddTask>
  );
}

export default AddTask;
