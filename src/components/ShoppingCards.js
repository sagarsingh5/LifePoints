import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ShoppingCards({
  height = 200,
  alignItems,
  justifyContent,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={require("../../assets/image.jpg")}
        style={[
          styles.container,
          {
            height: height,
            alignItems: alignItems === "left" ? "flex-end" : "flex-start",
            justifyContent:
              justifyContent === "top" ? "flex-start" : "flex-end",
          },
        ]}
      >
        <View>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}>
            100
          </Text>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 8,
              textTransform: "uppercase",
            }}
          >
            points
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: 10,
    margin: 5,
    overflow: "hidden",
    padding: 10,
  },
});
