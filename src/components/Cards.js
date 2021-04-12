import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get("screen");

export default function Cards({ cardWidth, onPress }) {
  //   console.log(height, width);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: cardWidth }]}
    >
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "#171732",

    height: height * 0.65,
    overflow: "hidden",
    marginHorizontal: width / 36,
  },
});
