import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("screen");

export default function Cards({ cardWidth }) {
  //   console.log(height, width);
  return (
    <View style={[styles.container, { width: cardWidth }]}>
      <ImageBackground
        style={{ height: "100%", width: "100%", justifyContent: "flex-end" }}
        source={require("../../assets/nike.png")}
      >
        <View
          style={{
            backgroundColor: "red",
            width: "100%",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Nike Joyride
          </Text>
          <Text style={{ color: "#fff", fontSize: 10, marginVertical: 10 }}>
            Magna proident commodo est reprehenderit et.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "#171732",

    height: height * 0.75,
    overflow: "hidden",
    marginHorizontal: width / 36,
  },
});
