import * as React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Card from "./components/card";
import Vouchers from "./components/vouchers";

const Rewards = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Text style={styles.textContainer}>Reward Points</Text>
          <Text>You earn 50,000 points this month...</Text>
        </Card>
        <Vouchers></Vouchers>
        <Vouchers></Vouchers>
        <Vouchers></Vouchers>
        <Vouchers></Vouchers>
        <Vouchers></Vouchers>
      </View>
    </ScrollView>
    // <ScrollView>
    // </ScrollView>
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
