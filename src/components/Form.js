import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (text) => {
    // console.log(text.target.value);
    setInputText(text.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    setTodos([
      ...todos,
      { text: inputText.trim(), completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    // "e" comes from the <select> tag in the html
    setStatus(e.target.value);
  };
  return (
    <form>
      <div className="input-wrapper">
        <input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
