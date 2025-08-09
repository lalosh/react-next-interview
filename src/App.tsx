import { useEffect, useState } from "react";
import "./App.css";

/*
 task1: add types for the response
 this is how a single todo object looks like
      {
        "id": 1,
        "todo": "Do something nice for someone you care about",
        "completed": false,
        "userId": 152
      }
 */

// task2: add a new function that can fetch single todo
// note:
// to get single todo call the API
// https://dummyjson.com/todos/{id}

function getTodos() {
  return fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((r) => r.todos);
}

function markTodoAsDone() {
  return fetch("https://dummyjson.com/todos/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: true,
    }),
  }).then((res) => res.json());
}

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function onLoad() {
    getTodos().then((response) => {
      console.log({ response });
      setTodos(response);
    });
  }, []);

  return (
    <>
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
                  if (!item.completed) {
                    markTodoAsDone();
                  }
                }}
              >
                {!item.completed ? "Done" : "Undo"}
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
