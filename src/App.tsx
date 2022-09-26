import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // initializing an stateful array with todos will get us type inferance, try using a type with the generic syntax of typescript
  const [todos, setTodos] = useState([new Todo("hey"), new Todo("there")]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    // state that depends on previous one, like arrays or objects should be passed as a function argument
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodoHandler = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
