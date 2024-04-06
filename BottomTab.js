import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Rewards from "./Rewards";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#1ABC9C",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Consumption"
        component={HomeScreen}
        options={{
          tabBarLabel: "Consumption",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-lightning-bolt"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sustainability"
        component={HomeScreen}
        options={{
          tabBarLabel: "Sustainability",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="leaf" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reward"
        component={Rewards}
        options={{
          tabBarLabel: "Reward",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gift" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
