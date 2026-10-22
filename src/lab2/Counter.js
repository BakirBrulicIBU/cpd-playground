import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function Counter() {
  const [count, setCount] = useState(0);
  const atZero = count === 0;

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Count: {count}</Text>
      <View style={styles.row}>
        <Pressable
          disabled={atZero}
          onPress={() => setCount((c) => c - 1)}
          style={[styles.button, atZero && { backgroundColor: "#9AA6B5" }]}
        >
          <Text style={styles.buttonText}>−1</Text>
        </Pressable>
        <Pressable onPress={() => setCount((c) => c + 1)} style={styles.button}>
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>
        <Pressable onPress={() => setCount(0)} style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}
