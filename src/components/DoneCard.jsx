import React from "react";

const DoneCard = ({ todos, setTodos, clickRemoveButton }) => {
  // -------------- 취소 버튼 --------------
  const clickCancelButton = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: false };
      }
      return todo;
    });
    setTodos(newTodo);
  };
  return (
    <div className="done_list">
      {todos.map((item) => {
        if (item.isDone === true) {
          return (
            <div key={item.id}>
              <div className="contents_box">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
              <div className="remove_box">
                <button
                  className="btn"
                  onClick={() => clickRemoveButton(item.id)}
                >
                  삭제
                </button>
              </div>
              <div className="cancel_box">
                <button
                  className="btn"
                  onClick={() => clickCancelButton(item.id)}
                >
                  취소
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DoneCard;
