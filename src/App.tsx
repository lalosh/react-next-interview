import { useEffect, useState } from "react";
import "./App.css";

/**
 * Task: Add types to the API response
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
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(function onLoad() {
    fetchTodos().then((response) => {
      setTodos(response);
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
