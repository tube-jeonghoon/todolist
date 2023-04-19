import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import TodoInputBox from "./components/TodoInputBox";
import TodoBox from "./components/TodoBox";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      {/* -------------- Header Box -------------- */}
      <Header />
      {/* -------------- Todo Input Box -------------- */}
      <TodoInputBox todos={todos} setTodos={setTodos} />
      {/* -------------- Todo Box -------------- */}
      <TodoBox todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
