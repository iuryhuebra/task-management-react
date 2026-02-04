import styled from "styled-components";
import Card from "./components/Card";

const StyledApp = styled.div`
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: top;
  height: 100vh;
  padding-top: 80px;
  background-color: #f3f4f6;
`;

function App() {
  return (
    <StyledApp>
      <Card />
    </StyledApp>
  );
}

export default App;
