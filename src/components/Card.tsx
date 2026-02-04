import styled from "styled-components";
import Header from "./Header";
import TaskList from "./TaskList";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 520px;
  max-height: 70vh;
  padding: 24px;

  background-color: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
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
