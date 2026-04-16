import { ListPlus } from "lucide-react";
import { styled } from "styled-components";

const StyledContainerAddTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 56px;
  padding: 12px 16px;
  border: 1px dashed rgba(148, 163, 184, 0.3);
  border-radius: 18px;
  background: rgba(248, 250, 252, 0.7);
  color: #475569;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease,
    border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #0f172a;
    border-color: rgba(59, 130, 246, 0.35);
  }
  &:active {
    transform: scale(0.98);
  }
  &:focus-visible {
    outline: 2px solid #2563eb;
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
