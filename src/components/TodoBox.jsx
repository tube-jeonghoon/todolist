import React from "react";
import TodoCard from "./TodoCard";
import DoneCard from "./DoneCard";

const TodoBox = ({ todos, setTodos }) => {
  // -------------- 삭제 버튼 --------------
  const clickRemoveButton = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <div className="todo_box">
      {/* -------------- Working zone -------------- */}
      <div className="working_zone">
        <p>Working~🔥</p>
        {/* -------------- Working list -------------- */}
        <TodoCard
          todos={todos}
          setTodos={setTodos}
          clickRemoveButton={clickRemoveButton}
        />
      </div>
      {/* -------------- Done Zone -------------- */}
      <div className="done_zone">
        <p>Done~⚡️</p>
        {/* -------------- Done List -------------- */}
        <DoneCard
          todos={todos}
          setTodos={setTodos}
          clickRemoveButton={clickRemoveButton}
        />
      </div>
    </div>
  );
};

export default TodoBox;
