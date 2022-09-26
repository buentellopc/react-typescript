import styles from "./TodoItem.module.css";

interface TodoItemProps {
  text: string;
  onDeleteTodo: (todoId: number) => void;
  id: number;
}

const TodoItem = ({ text, onDeleteTodo, id }: TodoItemProps) => {
  return (
    <li
      className={styles.item}
      onClick={() => {
        onDeleteTodo(id);
      }}
    >
      {text}
    </li>
  );
};

export default TodoItem;
