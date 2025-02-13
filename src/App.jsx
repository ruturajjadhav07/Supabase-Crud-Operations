import React, { useEffect, useState } from "react";
import supabase from "./Config";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data, error } = await supabase.from("TodoList").select("*");
    if (error) {
      console.log("Error fetching todos:", error);
    } else {
      setTodoList(data);
    }
  };

  const addTodo = async () => {
    if (!newTodo.trim()) {
      console.log("Todo cannot be empty");
      return;
    }

    const newTodoData = {
      name: newTodo,
      isCompleted: false,
    };

    const { data, error } = await supabase.from("TodoList").insert([newTodoData]);

    if (error) {
      console.log("Error in adding todo", error);
    } else {
      setTodoList((prev) => [...prev, data[0]]);
      setNewTodo("");
    }
  };

  const deleteTodo = async (id) => {
    const { error } = await supabase.from("TodoList").delete().eq("id", id);

    if (error) {
      console.log("Error deleting todo:", error);
    } else {
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div>
      <h1>ToDo List</h1>

      <div>
        <input
          type="text"
          placeholder="New Todo"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button onClick={addTodo}>Add Item</button>
      </div>

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button>{todo.isCompleted ? "Not Done" : "Completed"}</button>
            <button onClick={() => deleteTodo(todo.id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
