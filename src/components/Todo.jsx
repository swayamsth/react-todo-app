import { useState } from "react";
import Form from "./Form";
import TodoList from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.status).length;
  const leftTodos = todos.filter((todo) => !todo.status).length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} leftTodos={leftTodos} />
    </div>
  );
}
