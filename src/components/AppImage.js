import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppImage({
  height,
  width = height,
  source,
  uri,
  icon,
  text,
  style,
  borderRadius,
  size = 12,
  borderWidth = 1,
  borderColor,
  onPress,
  iconColor = "#fff",
}) {
  return (
    <>
      {text && (
        <Text
          style={{
            color: "#a9a9a9",
            alignSelf: "center",
            textTransform: "uppercase",
            fontSize: 10,
          }}
        >
          {text}
        </Text>
      )}
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            height: height,
            width: width,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: borderWidth,
            borderColor: borderColor ? borderColor : icon ? "#a9a9a9" : "",
            borderRadius: borderRadius ? height / 2 : icon ? height / 2 : 0,
            overflow: "hidden",
          },
          style,
        ]}
      >
        {source && (
          <Image style={{ height: "100%", width: "100%" }} source={source} />
        )}
        {uri && (
          <Image style={{ height: "100%", width: "100%" }} source={{ uri }} />
        )}
        {icon && (
          <MaterialCommunityIcons name={icon} size={size} color={iconColor} />
        )}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
