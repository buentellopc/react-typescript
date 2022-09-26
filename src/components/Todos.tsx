import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

type TodosProps = {
  items: Todo[];
  onDeleteTodo: any;
};

const Todos = ({ items, onDeleteTodo }: TodosProps) => {
  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <>
          <TodoItem key={item.id} text={item.text} />
          <button
            key={Math.random()}
            onClick={() => {
              onDeleteTodo(item.id);
            }}
          >
            delete
          </button>
        </>
      ))}
    </ul>
  );
};

export default Todos;
