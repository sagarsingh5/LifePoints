import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BarCodeScreen from "../screens/BarCodeScreen";
import RankingScreen from "../screens/RankingScreen";
import ShoppingScreen from "../screens/ShoppingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileNavigation from "./ProfileNavigation";
import CauroselScreen from "../screens/CauroselScreen";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: "#030323",
          borderWidth: 0,
        },
        activeTintColor: "#B2285C",
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        // children={ProfileNavigation}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apps" size={35} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="BarCodeScreen"
        component={BarCodeScreen}
        // children={ProfileNavigation}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="camera-control"
              size={35}
              color={color}
            />
          ),
          // tabBarLabel=null
        })}
      />
      <Tab.Screen
        name="RankingScreen"
        component={RankingScreen}
        // children={ProfileNavigation}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="trophy-outline"
              size={35}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ShoppingScreen"
        component={ShoppingScreen}
        // children={ProfileNavigation}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={35}
              color={color}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
