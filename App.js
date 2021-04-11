import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "./src/components/AppTextInput";
import Screen from "./src/components/Screen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ForgotPassword from "./src/screens/ForgotPassword";
import ResetPassword from "./src/screens/ResetPassword";
import HomeScreen from "./src/screens/HomeScreen";
import CauroselScreen from "./src/screens/CauroselScreen";
import AboutScreen from "./src/screens/AboutScreen";
import BarCodeScreen from "./src/screens/BarCodeScreen";
import RankingScreen from "./src/screens/RankingScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";
import ShoppingScreen from "./src/screens/ShoppingScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
