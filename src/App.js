import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Row>
        <Column>
          <spn>Name</spn>
          <input></input>
        </Column>
        <Column>
          <spn>Time zone</spn>
          <input></input>
        </Column>
        <button>Add</button>
      </Row>
      <Row>
        <Clock name = "Moscow" time= "10:00:59"/>
        <Clock name = "Moscow" time= "10:30:59"/>
      </Row>
    </Container>
  );
}

const Clock = ({time, name}) => {
  return (
    <Column>
      <button>X</button>
      <span>{name}</span>
      <span>{time}</span>
    </Column>
  );
};

const Container = styled.div``;

const Row = styled.div`
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
