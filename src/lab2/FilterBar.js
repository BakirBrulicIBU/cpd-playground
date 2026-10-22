import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function FilterBar({ filter, onChange }) {
  return (
    <View style={styles.row}>
      {["all", "active", "done"].map((f) => (
        <Pressable
          key={f}
          onPress={() => onChange(f)}
          style={[
            styles.button,
            filter !== f && { backgroundColor: "#9AA6B5" },
          ]}
        >
          <Text style={styles.buttonText}>
            {f[0].toUpperCase() + f.slice(1)}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
