import React from "react";
import styled from "styled-components";

const StWorkingList = styled.div`
  /* border: solid 1px gray; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 5px;
  white-space: pre-wrap;
`;

const StContentsBox = styled.div`
  white-space: pre-wrap;
  border: solid 1px #8b8687;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
`;

const StBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  float: left;
  width: 120px;
  height: 40px;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  border-radius: 5px;
  transition: all 0.2s;
  background: #8b8687;
  &:hover {
    background-color: #3a5134;
    color: white;
  }
`;

const StRemoveCancelBoxArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    <StWorkingList className="working_list">
      {todos.map((item) => {
        if (item.isDone === false) {
          return (
            <StContentsBox className="contents_box">
              <div key={item.id}>
                <div className="card">
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
              <StRemoveCancelBoxArea>
                <div className="remove_box">
                  <StBtn
                    className="btn"
                    onClick={() => clickRemoveButton(item.id)}
                  >
                    삭제
                  </StBtn>
                </div>
                <div className="done_box">
                  <StBtn
                    className="btn"
                    onClick={() => clickDoneButton(item.id)}
                  >
                    완료
                  </StBtn>
                </div>
              </StRemoveCancelBoxArea>
            </StContentsBox>
          );
        }
      })}
    </StWorkingList>
  );
};

export default TodoCard;
