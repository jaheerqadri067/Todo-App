import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  let addTask = () => {
    // if(newTodo.trim() == "") {
    //     alert("Input can't be empty")
    // } else {
    //     setTodos([...todos, {task: newTodo, id: uuidv4() }])
    // }

    newTodo.trim() === ""
      ? alert("input can't be empty")
      : setTodos([...todos, { task: newTodo, id: uuidv4() }]);

    setNewTodo("");
  };

  let addNewTodo = (event) => {
    setNewTodo(event.target.value);
  };
  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        placeholder="Add Todo"
        id="text"
        value={newTodo}
        onChange={addNewTodo}
      />
      <br />
      <br />
      <button onClick={addTask}>Add</button>
      <h3>Todos</h3>
      <hr />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
