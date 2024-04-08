import * as React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Card from "./components/card";
import Vouchers from "./components/vouchers";

const Rewards = () => {
  return (
    // <View style={{ height: 3000 }}>
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
    // </View>

    // <ScrollView>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContents: "center",
    height: 900,
  },
  textContainer: {
    fontSize: 15,
    fontWeight: "500",
  },
});

export default Rewards;
