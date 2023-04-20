import React from "react";
import styled from "styled-components";

const StDoneList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 5px;
  white-space: pre-wrap;
`;

const StContentsBox = styled.div`
  white-space: pre-wrap;
  border: solid 1px #3a5134;
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
  background: #3a5134;
  &:hover {
    background-color: #8b8687;
    color: white;
  }
`;

const StRemoveCancelBoxArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    <StDoneList className="done_list">
      {todos.map((item) => {
        if (item.isDone === true) {
          return (
            <StContentsBox key={item.id}>
              <div className="contents_box">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
              <StRemoveCancelBoxArea className="remove_cancel_box_area">
                <div className="remove_box">
                  <StBtn
                    className="btn"
                    onClick={() => clickRemoveButton(item.id)}
                  >
                    삭제
                  </StBtn>
                </div>
                <div className="cancel_box">
                  <StBtn
                    className="btn"
                    onClick={() => clickCancelButton(item.id)}
                  >
                    취소
                  </StBtn>
                </div>
              </StRemoveCancelBoxArea>
            </StContentsBox>
          );
        }
      })}
    </StDoneList>
  );
};

export default DoneCard;
