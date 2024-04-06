import React, { useState } from "react";
import {
    SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PieChart, BarChart } from "react-native-chart-kit";
import Card from "./components/card";
import Legend from "./components/legend";
// import CustomBarChart from './components/barchart';

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    barPercentage: 0.7,
    height:200,
    fillShadowGradient: `rgba(1, 122, 205, 1)`,
    fillShadowGradientOpacity: 1,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
  
    style: {
      borderRadius: 16,
      fontFamily: "Bogle-Regular",
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: "#e3e3e3",
      strokeDasharray: "0",
    },
    propsForLabels: {
      fontFamily: "Bogle-Regular",
    },
  };
const data = [
  {
    name: "ClubHouse",
    consumption: 100,
    color: "#E6F69D",
    legendFontColor: "black",
    legendFontSize: 15,
  },
  {
    name: "Block 1",
    consumption: 200,
    color: "#AADEA7",
    legendFontColor: "black",
    legendFontSize: 15,
  },
  {
    name: "Block 2",
    consumption: 300,
    color: "#64C2A6",
    legendFontColor: "black",
    legendFontSize: 15,
  },
  {
    name: "Security",
    consumption: 400,
    color: "#2D87BB",
    legendFontColor: "black",
    legendFontSize: 15,
  },
];
const bcdata = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
const Consumption = () => {
  const [flexDirection, setflexDirection] = useState("column");

  return (
    <PreviewLayout
      label="Overview"
      titles={[
        ["ClubHouse", 100],
        ["Block 1", 200],
        ["Block 2", 300],
        ["Security", 400],
      ]}
    >
      <Card >
        <PieChartComponent style={{ justifyContent: "center" }} />
      </Card>

      <Card>
        <Text style={{textAlign:"center", marginVertical:10, fontSize:20}}>Distribution by Days</Text>
            <BarChart
        // style={graphStyle}
        
        data={bcdata}
        width={300}
        height={200}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        />
      </Card>
    </PreviewLayout>
  );
};
const PieChartComponent = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.titleContainer}> */}
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        Distribution of Utility
      </Text>
      {/* </View> */}

      <View style={styles.bodyContainer}>
        <View style={styles.chartContainer}>
          <PieChart
            data={data}
            width={400}
            height={200}
            chartConfig={chartConfig}
            accessor={"consumption"}
            backgroundColor={"transparent"}
            center={[0, 0]}
            hasLegend={false}
          />
        </View>

        <View style={styles.legendContainer}>
          {data.map(({ name, color }) => {
            return <Legend key={name} name={name} color={color} />;
          })}
        </View>
      </View>
    </View>
  );
};

const PreviewLayout = ({
  label,
  children,
  titles,
  selectedValue,
  setSelectedValue,
}) => (
  <SafeAreaView style={{ padding: 10, flex: 1 }} alwaysBounceVertical={true}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {titles.map((value) => (
        <View
          key={value}
          onPress={() => setSelectedValue(value)}
          style={styles.button}
        >
          <Text style={[styles.buttonLabel]}>{value[0]}</Text>
          <Text style={[styles.buttonValue]}>{value[1]} kW</Text>
        </View>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     marginTop: 8,
  //     // backgroundColor: 'aliceblue',
  //   },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    // textAlign: "center"
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    height: 100,
    backgroundColor: "white",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
    elevation: 2,
    alignItems: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: "500",
    color: "#1ABC9C",
  },

  buttonValue: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "500",
    color: "black",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
  },
  container: {
    marginTop: 10,
  },
  titleContainer: {
    flex: 2,
    alignItems: "center",
  },
  bodyContainer: {
    flexDirection: "row",
  },
  chartContainer: {
    flex: 2,
  },
  legendContainer: {
    flex: 1,
    marginTop: 20,
  },
  card:{
    backgroundColor:'white'
  }
});

export default Consumption;
