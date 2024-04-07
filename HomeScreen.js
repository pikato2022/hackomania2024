import * as React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./components/card";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Text style={styles.textContainer}>Power Consumption</Text>
          <Text>5kW/15kW</Text>
          <Text style={styles.textContainer}>Energy Consumption</Text>
          <Text>200kW/300kW</Text>
        </Card>
        <Card>
          <Text style={styles.textContainer}>Sustainability Guide</Text>
          <Text>It's cold tonight! Try going without aircon</Text>
        </Card>
        <Card>
          <Text style={styles.textContainer}>Reward Points</Text>
          <Text>Click on the Rewards Tab to see more!</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1ABC9C",
    alignItems: "center",
    justifyContents: "center",
    height: 800,
  },
  textContainer: {
    fontSize: 18,
    fontWeight: "500",
  },
});
export default HomeScreen;
