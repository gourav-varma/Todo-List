import React from "react";
// Importing Componentes
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  // const todosMap = (todos) => {

  // }
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            curTodo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
