import React, { useRef } from "react";
import styles from "./NewTodo.module.css";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo = (props: NewTodoProps) => {
  // useRef needs to know what type object is dealing with, it also needs an initial value
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // submit handler takes an argument that is of certain event type, benefit from the inline handler inferring that provides typescript to quickly know the type
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // either use ? or !, types will differ with the operators
    const enteredText = todoTextInputRef.current!.value;

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
