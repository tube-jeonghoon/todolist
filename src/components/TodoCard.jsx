import React from "react";

const TodoCard = ({ todos, setTodos, clickRemoveButton }) => {
  // -------------- 완료 버튼 --------------
  const clickDoneButton = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodos(newTodo);
  };
  return (
    <div className="working_list">
      {todos.map((item) => {
        if (item.isDone === false) {
          return (
            <div key={item.id}>
              <div className="contents_box">
                <div className="card">
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
              <div className="remove_box">
                <button
                  className="btn"
                  onClick={() => clickRemoveButton(item.id)}
                >
                  삭제
                </button>
              </div>
              <div className="done_box">
                <button
                  className="btn"
                  onClick={() => clickDoneButton(item.id)}
                >
                  완료
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TodoCard;
