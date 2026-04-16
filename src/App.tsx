import styled from "styled-components";
import Card from "./components/Card";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 48px 20px;
`;

function App() {
  return (
    <StyledApp>
      <Card />
    </StyledApp>
  );
}

export default App;
