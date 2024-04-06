import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    //   initialRouteName="Feed"
    //   screenOptions={{
    //     tabBarActiveTintColor: '#e91e63',
    //   }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({ color, size }) => (
        //     <MaterialCommunityIcons name="home" color={color} size={size} />
        //   ),
        // }}
      />
        <Tab.Screen
        name="Abc"
        component={HomeScreen}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({ color, size }) => (
        //     <MaterialCommunityIcons name="home" color={color} size={size} />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;