import React, { useRef } from "react";
import styles from "./NewTodo.module.css";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo = (props: NewTodoProps) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="todo">Enter the todo</label>
      <input type="text" id="todo" ref={todoTextInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
