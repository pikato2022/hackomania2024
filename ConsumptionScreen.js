import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { PieChart , BarChart} from 'react-native-chart-kit';
import Card from './components/card';
import Legend from './components/legend';
import CustomBarChart from './components/barchart';

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
  };
const data = [

    {
      name: 'ClubHouse',
      consumption: 100,
      color: '#E6F69D',
      legendFontColor: 'black',
      legendFontSize: 15,
    },
    {
      name: 'Block 1',
      consumption: 200,
      color: '#AADEA7',
      legendFontColor: 'black',
      legendFontSize: 15,
    },
    {
      name: 'Block 2',
      consumption: 300,
      color: '#64C2A6',
      legendFontColor: 'black',
      legendFontSize: 15,
    },
    {
      name: 'Security',
      consumption: 400,
      color: '#2D87BB',
      legendFontColor: 'black',
      legendFontSize: 15,
    }
  ];
const bcdata = { 
    labels: ["1", "2", "3", "4", "5", "6","7","8","9"],
    datasets: [
        {
            data: [40, 84, 56, 40, 60, 55, 40, 72, 40],
            colors: [
                (opacity = 1) => `#BE95FF`,
                (opacity = 1) => `#78A9FF`,
                (opacity = 1) => `#FFFFFF`,
                (opacity = 1) => `#FFFFFF`,
                (opacity = 1) => `#FFFFFF`,
                (opacity = 1) => `#FFFFFF`,
                (opacity = 1) => `#FFFFFF`,
                (opacity = 1) => `#FFFFFF`,
                (opacity = 1) => `#FFFFFF`,
            ]
        } 
    ]
}; 
const Consumption = () => {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    
    <PreviewLayout
      label="Overview"
      titles={[['ClubHouse', 100], ['Block 1', 200], ['Block 2', 300], ['Security', 400]]}

      >
        <Card >
        <PieChartComponent style={ {justifyContent: "center"}} />
        </Card>
        <Card>
        <BarChart 
            style={{
            marginLeft: - 2*4
            }}
            data={bcdata}
            width={400}
            height={200} 
            chartConfig={{ 
            backgroundColor: "transparent",
            backgroundGradientTo: "white",
            backgroundGradientFromOpacity: 0,
            backgroundGradientFrom: "white",
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => `#FFFFFF`,
            barPercentage: 0.28,
            barRadius : 5,  
            }}
            withHorizontalLabels={false}
            fromZero={true}
            withCustomBarColorFromData={true}
            flatColor={true}
            withInnerLines={false}
            showBarTops={false}
            showValuesOnTopOfBars={true}
            />
        </Card>

    </PreviewLayout>
  );
};
const PieChartComponent = () => {
    return (
        <View style={styles.container}>
        {/* <View style={styles.titleContainer}> */}
          <Text style={{textAlign:"center", fontSize:20}}>Distribution of Utility</Text>
        {/* </View> */}
  
        <View style={styles.bodyContainer}>
          <View style={styles.chartContainer}>
            <PieChart
              data={data}
              width={400}
              height={200}
              chartConfig={chartConfig}
              accessor={'consumption'}
              backgroundColor={'transparent'}
              center={[0, 0]}
              hasLegend={false}
            />
          </View>
  
          <View style={styles.legendContainer}>
            {data.map(({name, color}) => {
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
  <ScrollView style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {titles.map(value => (
        <View
          key={value}
          onPress={() => setSelectedValue(value)}
          style={styles.button}>
          <Text
            style={[
              styles.buttonLabel
    
            ]}>
            {value[0]}
          </Text>
          <Text
          style={[
              styles.buttonValue
            ]}>
            
            {value[1]} kW
          </Text>

        </View>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </ScrollView>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    // textAlign: "center"
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    height:100,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
    elevation:2,
    alignItems: "center"
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1ABC9C',
  },
  
  buttonValue: {
    marginTop:10,
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginVertical:10,
    fontSize: 20,
  },
  container: {
    marginTop: 10,
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
  },
  bodyContainer: {
    flexDirection: 'row',
  },
  chartContainer: {
    flex: 2,
  },
  legendContainer: {
    flex: 1,
    marginTop: 20
  },
});

export default Consumption;