import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ fontSize: 5 }}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: "30em",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
