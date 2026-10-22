import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  }

  return (
    <View style={styles.row}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New task"
        style={[styles.input, { flex: 1 }]}
      />
      <Pressable onPress={handleAdd} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
}
