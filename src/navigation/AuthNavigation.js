import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import VerificationScreen from "../screens/VerificationScreen";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPassword from "../screens/ResetPassword";
// import TabNavigation from "./TabNavigation";
import AppNavigation from "./AppNavigation";
// import BarCodeScreen from "../screens/BarCodeScreen";
// import RankingScreen from "../screens/RankingScreen";
// import ShoppingScreen from "../screens/ShoppingScreen";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="AppNav" component={AppNavigation} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
