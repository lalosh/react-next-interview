import { useEffect } from "react";
import "./App.css";

/**
 * Task: store the fetched todos and render them
 */

/*

Todo object shape:

{
  "id": 1,
  "todo": "Do something nice for someone you care about",
  "completed": false,
  "userId": 152
}

*/

function fetchTodos() {
  return fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((r) => r.todos);
}

function App() {
  const todos: any[] = [];

  useEffect(function onLoad() {
    fetchTodos().then((response) => {
      console.log({ response });
      // store todos
    });
  }, []);

  return (
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
            <button>{!item.completed ? "Done" : "Undo"}</button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default App;
