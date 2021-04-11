import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import RankingScreen from "../screens/RankingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ShoppingScreen from "../screens/ShoppingScreen";
// import BarCodeScreen from "../screens/BarCodeScreen";
// import RankingScreen from "../screens/RankingScreen";
// import ShoppingScreen from "../screens/ShoppingScreen";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const ProfileNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RankingScreen" component={RankingScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="ShoppingScreen" component={ShoppingScreen} />
      {/* <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="TabNav" component={TabNavigation} /> */}
    </Stack.Navigator>
  );
};
export default ProfileNavigation;
