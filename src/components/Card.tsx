import styled from "styled-components";
import Header from "./Header";
import TaskList from "./TaskList";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  width: min(100%, 760px);
  min-height: min(82vh, 860px);
  padding: 28px;

  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(18px);
  box-shadow:
    0 24px 60px rgba(15, 23, 42, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 28px;
  overflow: hidden;
`;

function Card() {
  return (
    <StyledCard>
      <Header />
      <TaskList />
    </StyledCard>
  );
}

export default Card;
