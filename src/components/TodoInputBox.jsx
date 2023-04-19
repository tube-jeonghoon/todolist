import React, { useState } from "react";

const TodoInputBox = ({ todos, setTodos }) => {
  const [input, setInput] = useState({ title: "", content: "" });

  // -------------- Input Handler -------------
  // inputChangeHandler라는 함수는 e라는 인자를 받습니다. 이 인자는 이벤트 객체(event object)입니다.
  // 이벤트 객체는 이벤트가 발생한 DOM 요소에 대한 정보와 이벤트 유형 등의 정보를 담고 있습니다.
  // 함수 내부에서 e.target을 통해 이벤트가 발생한 DOM 요소를 참조할 수 있습니다.
  // 이 코드에서는 name과 value라는 변수를 이벤트 객체의 target 프로퍼티에서 추출합니다.
  // name은 이벤트가 발생한 input 요소의 name 속성 값을, value는 name 속성 값에 입력된 사용자 입력 값을 나타냅니다.
  // 그리고 나서, setValue 함수를 호출합니다. 이 함수는 상태(state)를 업데이트하기 위해 사용되는 함수로 추측됩니다.
  // setValue 함수의 인자로 전달되는 객체는, 기존 value 객체의 모든 프로퍼티를 복사하고 name 프로퍼티의 값을 value 변수의 값으로 덮어쓰는 객체입니다. 이를 통해, name에 해당하는 프로퍼티의 값이 업데이트됩니다.

  const inputChangeHandler = (e) => {
    // 구조분해 할당
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
      // [e.target.name]: e.target.value,
    });
  };

  // -------------- 추가 버튼 --------------
  const clickAddButton = () => {
    const newTodo = {
      id: todos.length + 1,
      title: input.title,
      content: input.content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInput({ title: "", content: "" });
  };

  return (
    <div className="TodoInputBox">
      {/* -------------- Title Input Box -------------- */}
      <div className="title_box">
        <input
          name="title"
          type="text"
          className="form-control"
          placeholder="Title"
          onChange={inputChangeHandler}
          value={input.title}
        />
      </div>
      {/* -------------- Content Input Box -------------- */}
      <div className="content_box">
        <input
          name="content"
          type="text"
          className="form-control"
          placeholder="Content"
          onChange={inputChangeHandler}
          value={input.content}
        />
      </div>
      {/* -------------- Add Button -------------- */}
      <div className="input_btn">
        <button type="button" onClick={clickAddButton} className="btn">
          추가하기
        </button>
      </div>
    </div>
  );
};

export default TodoInputBox;
