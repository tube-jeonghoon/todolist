import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // contents 이름 바꿔주세요.
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  // 하나의 state 관리해주세요.
  // 하나의 state로 하나의 handler로
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  //추가 버튼
  const clickAddButton = () => {
    const newTodo = {
      // 난수 사용 추천 uuid 알아보기
      id: todos.length + 1,
      title,
      todo,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setTodo("");
  };

  // 삭제버튼
  const clickRemoveButton = (id) => {
    // todo.id가 id와 서로 일치하지 않는 요소들로 이루어진 새로운 배열 `newTodo`를 만듭니다.
    const newTodo = todos.filter((todo) => todo.id !== id);
    // setTodo 함수를 호출할 때, newTodo 변수를 배열로 감싸주면, 기존 배열과 새로운 배열이 중첩된 형태로 들어가기 때문에 문제가 발생
    setTodos(newTodo);
  };

  // 완료, 취소버튼 합쳐주세요.
  // 완료 버튼
  const clickDoneButton = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });

    setTodos(newTodo);
  };

  // 취소 버튼
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
    <div className="container">
      <div className="header d-flex justyfy-content-between">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      {/* ------- contentInput ------- */}
      <div className="contentInput row g-3">
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Content"
            onChange={todoChangeHandler}
            value={todo}
          />
        </div>
        <div className="col-sm">
          <button
            type="button"
            onClick={clickAddButton}
            className="btn btn-success btn-custom"
          >
            ADD
          </button>
        </div>
      </div>
      {/* ------- contentBox ------- */}
      <div className="contentBox">
        {/* ------- Working Zone ------- */}
        <div className="working">
          Working~🔥
          <div className="working-list container">
            <div className="row row-cols-3">
              {todos.map((item) => {
                if (item.isDone === false) {
                  return (
                    <div key={item.id} className="col align-items-center">
                      <div className="card card-costom">
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.todo}</p>
                          <button
                            className="btn btn-success btn-custom"
                            onClick={() => clickRemoveButton(item.id)}
                          >
                            삭제하기
                          </button>
                          <button
                            className="btn btn-success btn-custom"
                            onClick={() => clickDoneButton(item.id)}
                          >
                            완료
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        {/* ------- Done Zone ------- */}
        <div className="done">
          Done..!!⚡️
          <div className="done-list container">
            <div className="row row-cols-3">
              {todos.map((item) => {
                if (item.isDone === true) {
                  return (
                    <div key={item.id} className="col align-items-start">
                      <div className="card card-costom">
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.todo}</p>
                          <button
                            className="btn btn-success btn-custom"
                            onClick={() => clickRemoveButton(item.id)}
                          >
                            삭제하기
                          </button>
                          <button
                            className="btn btn-success btn-custom"
                            onClick={() => clickCancelButton(item.id)}
                          >
                            취소
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
