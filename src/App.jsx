import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import TodoInputBox from "./components/TodoInputBox";
import TodoBox from "./components/TodoBox";
import styled from "styled-components";
import "./App.css";

const StApp = styled.div`
  /* background-color: #d5ffeb; */
  margin: 1rem auto;
  max-width: 1200px;
  min-width: 800px;
`;

const App = () => {
  const [todos, setTodos] = useState([]);

  // setTodos를 내려주는 함수

  return (
    <StApp className="App">
      {/* -------------- Header Box -------------- */}
      <Header />
      {/* -------------- Todo Input Box -------------- */}
      <TodoInputBox todos={todos} setTodos={setTodos} />
      {/* -------------- Todo Box -------------- */}
      <TodoBox todos={todos} setTodos={setTodos} />
    </StApp>
  );
};

export default App;
