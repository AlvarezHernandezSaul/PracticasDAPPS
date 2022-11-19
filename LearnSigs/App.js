import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, Text} from "react-native";
import { BottomNavigation } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BaseScreen from "./src/BaseScreen";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Spacer, Center, NativeBaseProvider} from "native-base";


const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator  
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home': 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            else if (route.name === 'Base') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Base" component={BaseScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  };

  export default App;