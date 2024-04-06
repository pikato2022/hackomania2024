import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/card";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Text>Power Consumption</Text>
      </Card>
      <Card>
        <Text>Estate Overview</Text>
      </Card>
      <Card>
        <Text>Reward Points</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContents: "center",
  },
});
export default HomeScreen;
