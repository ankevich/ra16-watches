import "./App.css";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [state, setState] = useState([
    { name: "Moscow", time: "10:00:59" },
    { name: "London", time: "10:30:59" },
  ]);
  const deleteClock = (index) => {
    const newState = state.filter((item, i) => i !== index);
    setState(newState);
  }
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
      <Clocks clocks={state} deleteClock = {deleteClock} />
    </Container>
  );
}

const Clocks = ({ clocks, deleteClock }) => {
  return (
    <Row>
      {clocks.map((item, index) => (
        <Clock name={item.name} time={item.time} index={index} deleteClock = {deleteClock} />
      ))}
    </Row>
  );
};

const Clock = ({ index, time, name, deleteClock }) => {
  return (
    <Column>
      <button onClick={()=> {deleteClock(index)}}>X</button>
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
