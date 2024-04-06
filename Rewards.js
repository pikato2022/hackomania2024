import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/card";
import Vouchers from "./components/vouchers";

const Rewards = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.textContainer}>Reward Points</Text>
        <Text>YOu earn 50,000 points this month...</Text>
      </Card>
      <Vouchers></Vouchers>
      <Vouchers></Vouchers>
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
  textContainer: {
    fontSize: 15,
    fontWeight: "500",
  },
});

export default Rewards;
