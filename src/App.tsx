import { useEffect, useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

function fetchTodoById() {
  return fetch("https://dummyjson.com/todos/{id}")
    .then((res) => res.json())
    .then((r) => r.todos);
}

function fetchTodos() {
  return fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((r) => r.todos);
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(function onLoad() {
    fetchTodos().then((response) => {
      setTodos(response);
    });
  }, []);

  return (
    <>
      <div>{/* display selected todo data*/}</div>

      <table>
        {todos?.map((item) => (
          <tr key={item.id}>
            <td>
              <span>{item.id}</span>
            </td>
            <td style={{ textAlign: "left" }}>
              <span>{item.todo}</span>
            </td>
            <td>
              <button
                onClick={() => {
                  fetchTodoById();
                }}
              >
                {"Fetch details"}
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
