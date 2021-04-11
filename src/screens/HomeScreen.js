import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppImage from "../components/AppImage";
import Header from "../components/Header";
import Screen from "../components/Screen";

export default function HomeScreen() {
  return (
    <Screen style={styles.container}>
      <Header />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
