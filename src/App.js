import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Column>
        <spn>Name</spn>
        <input></input>
      </Column>
      <Column>
        <spn>Time zone</spn>
        <input></input>
      </Column>
      <button>Add</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 10px;
  gap: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default App;
