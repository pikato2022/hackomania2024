import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Vouchers(props) {
  return (
    <View style={styles.voucher}>
      <View style={styles.voucherContent}>
        <Image
          style={styles.voucherDesign}
          source={require("../assets/voucherDesign.png")}
        />
        <View>
          <Text style={styles.voucherTextHeader}>Voucher</Text>
          <Text style={styles.voucherText}>Burger King</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  voucher: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shawdowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 6,
    width: 350,
    height: 130,
  },
  voucherContent: {
    flexDirection: "row",
  },
  voucherDesign: {
    width: 100,
    height: 130,
    borderRadius: 6,
    marginRight: 20,
  },
  voucherTextHeader: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 10,
    marginLeft: 5,
  },
  voucherText: {
    fontSize: 13,
    fontWeight: "300",
    marginTop: 50,
    marginLeft: 8,
  },
});
