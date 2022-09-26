import styles from "./TodoItem.module.css";

interface TodoItemProps {
  text: string;
  onDeleteTodo: () => void;
}

const TodoItem = ({ text, onDeleteTodo }: TodoItemProps) => {
  return (
    <li className={styles.item} onClick={onDeleteTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
