import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("hey"), new Todo("there")];
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
