import styles from "./TodoItem.module.css";

interface TodoItemProps {
  text: string;
}

const TodoItem = ({ text }: TodoItemProps) => {
  return <li className={styles.item}>{text}</li>;
};

export default TodoItem;
