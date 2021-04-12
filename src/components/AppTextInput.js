import React from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// const WIDTH=Dimensions.h
export default function AppTextInput({
  placeholder,
  height = 60,
  width = "100%",
  icon,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { height: height, width: width }]}>
      <Text style={[styles.placeholder, { fontSize: height / 5 }]}>
        {placeholder}
      </Text>
      <View style={styles.input}>
        <TextInput
          style={[styles.text, { fontSize: height / 3 }]}
          // defaultValue="Holla"
          {...otherProps}
        />
        {icon && <MaterialCommunityIcons name="check" size={22} color="#fff" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    paddingVertical: 5,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#595967",
    borderRadius: 5,
    marginVertical: 5,
  },
  text: { flex: 1, fontSize: 14, color: "#fff", marginVertical: 5 },
  placeholder: {
    color: "#595967",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
