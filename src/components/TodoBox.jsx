import React from "react";
import TodoCard from "./TodoCard";
import DoneCard from "./DoneCard";
import styled from "styled-components";

const StTodoBox = styled.div`
  /* border: 1px solid black; */
`;

const TodoBox = ({ todos, setTodos }) => {
  // -------------- 삭제 버튼 --------------
  const clickRemoveButton = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <StTodoBox className="todo_box">
      {/* -------------- Working zone -------------- */}
      <div className="working_zone">
        <h2>Working~🔥</h2>
        {/* -------------- Working list -------------- */}
        <TodoCard
          todos={todos}
          setTodos={setTodos}
          clickRemoveButton={clickRemoveButton}
        />
      </div>
      {/* -------------- Done Zone -------------- */}
      <div className="done_zone">
        <h2>Done~⚡️</h2>
        {/* -------------- Done List -------------- */}
        <DoneCard
          todos={todos}
          setTodos={setTodos}
          clickRemoveButton={clickRemoveButton}
        />
      </div>
    </StTodoBox>
  );
};

export default TodoBox;
