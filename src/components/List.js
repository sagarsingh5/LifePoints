import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppImage from "./AppImage";

export default function List({ count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //   backgroundColor: "yellow",
        }}
      >
        <AppImage
          height={50}
          borderRadius
          source={require("../../assets/image.jpg")}
        />
        <View>
          <Text style={styles.text}>NAme Name</Text>
          <Text style={[styles.text, { fontSize: 12 }]}>56445</Text>
        </View>
      </View>
      <AppImage
        height={50}
        borderRadius
        source={require("../../assets/logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    // backgroundColor: "red",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    color: "#fff",
    marginHorizontal: 10,
    // alignSelf: "center",
    marginVertical: 5,
  },
});
