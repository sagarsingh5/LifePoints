import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from "react-native";
// import colors from "../config/colors";

export default function AppButton({
  title,
  onPress,
  style,
  backgroundColor,
  disabled = false,
  width = "100%",
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        { backgroundColor: backgroundColor, width },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginVertical: 5,
  },
  text: {
    color: "#fff",
    textTransform: "capitalize",
    // fontWeight: "bold",
    fontSize: 14,
    lineHeight: 24,
    // fontFamily: "SerifBold",
  },
});
