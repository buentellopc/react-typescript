class Todo {
  id: number;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random();
    // this.id = new Date().toISOString();
  }
}

export default Todo;
