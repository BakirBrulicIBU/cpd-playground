import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Install Expo Go", done: true },
    { id: "2", title: "Finish Lab 2", done: false },
  ]);
  const [text, setText] = useState("");

  function addTodo() {
    if (!text.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now().toString(), title: text.trim(), done: false },
    ]);
    setText("");
  }

  function removeTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="New task"
          style={[styles.input, { flex: 1 }]}
        />
        <Pressable onPress={addTodo} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>

      <Text style={styles.muted}>{todos.length} tasks</Text>

      {todos.length === 0 && <Text style={styles.muted}>No tasks yet</Text>}

      {todos.map((todo) => (
        <View
          key={todo.id}
          style={[styles.card, styles.row, { alignItems: "center" }]}
        >
          <Text style={{ flex: 1 }}>{todo.title}</Text>
          <Pressable onPress={() => removeTodo(todo.id)} style={styles.button}>
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
