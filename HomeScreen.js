import * as React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./components/card";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Text style={styles.textContainer}>Power Consumption</Text>
        </Card>
        <Card>
          <Text style={styles.textContainer}>Estate Overview</Text>
        </Card>
        <Card>
          <Text style={styles.textContainer}>Reward Points</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContents: "center",
  },
  textContainer: {
    fontSize: 15,
    fontWeight: "500",
  },
});
export default HomeScreen;
