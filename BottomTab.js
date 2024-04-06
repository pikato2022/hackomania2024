import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Consumption from './ConsumptionScreen';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#1ABC9C',
        tabBarStyle : {
            height: 90,
            position: 'absolute'
        }
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={Consumption}
        options={{
          tabBarLabel: 'Home' ,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={40} marginTop={10} />
          ),
          tabBarLabelStyle: {
            fontSize:15,
            marginBottom:10
          }
        }}
        
      />

<Tab.Screen
        name="Consumption"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home' ,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-lightning-bolt" color={color} size={40} marginTop={10} />
          ),
          tabBarLabelStyle: {
            fontSize:15,
            marginBottom:10
          }
        }}
        
      />
      <Tab.Screen
        name="Sustainability"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home' ,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="leaf" color={color} size={40} marginTop={10} />
          ),
          tabBarLabelStyle: {
            fontSize:15,
            marginBottom:10
          }
        }}
        
      />
      <Tab.Screen
        name="Reward"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home' ,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gift" color={color} size={40} marginTop={10} />
          ),
          tabBarLabelStyle: {
            fontSize:15,
            marginBottom:10
          }
        }}
        
      />
     


    </Tab.Navigator>
    
  );
}
// const styles = StyleSheet.create({
//     container: {
//         height: 100
//     }
// })
export default BottomTab;