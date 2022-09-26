import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

type TodosProps = {
  items: Todo[];
  onDeleteTodo: (todoId: number) => void;
};

const Todos = ({ items, onDeleteTodo }: TodosProps) => {
  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
