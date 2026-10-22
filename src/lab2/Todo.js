import { useState } from "react";
import { Text, View } from "react-native";
import AddTodo from "./AddTodo";
import FilterBar from "./FilterBar";
import TodoItem from "./TodoItem";
import { styles } from "./styles";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Install Expo Go", done: true },
    { id: "2", title: "Finish Lab 2", done: false },
  ]);
  const [filter, setFilter] = useState("all");

  function addTodo(title) {
    setTodos([...todos, { id: Date.now().toString(), title, done: false }]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  function toggleTodo(id) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  const leftCount = todos.filter((t) => !t.done).length;
  const visible = todos.filter((t) =>
    filter === "active" ? !t.done : filter === "done" ? t.done : true,
  );

  return (
    <View style={styles.screen}>
      <AddTodo onAdd={addTodo} />
      <FilterBar filter={filter} onChange={setFilter} />
      <Text style={styles.muted}>{leftCount} left</Text>

      {todos.length === 0 && <Text style={styles.muted}>No tasks yet</Text>}

      {visible.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      ))}
    </View>
  );
}
