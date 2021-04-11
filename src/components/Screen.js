import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
// import Constants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      {children}
      <StatusBar style="light" backgroundColor="#00001F" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 23,
    backgroundColor: "#00001F",
  },
});
