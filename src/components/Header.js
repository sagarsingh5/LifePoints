import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppImage from "./AppImage";

export default function Header({ onPress }) {
  return (
    <LinearGradient
      colors={["#191935", "#1D1C3E", "#4B4494"]}
      start={{ x: 0, y: 4 }}
      end={{ x: 1.5, y: 1 }}
      style={styles.header}
    >
      <View style={styles.headerBox}>
        <AppImage
          height={50}
          borderRadius
          onPress={onPress}
          source={require("../../assets/logo.png")}
        />
        <Text style={styles.text}>Name</Text>
      </View>
      <View style={styles.headerBox}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text}>Points</Text>
          <Text style={styles.text}>40</Text>
        </View>
        <AppImage
          height={50}
          borderRadius
          source={require("../../assets/logo.png")}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  headerBox: { flexDirection: "row", alignItems: "center" },
  text: { fontSize: 12, color: "#fff", marginHorizontal: 10 },
});
