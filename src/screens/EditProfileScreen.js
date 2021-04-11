import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppImage from "../components/AppImage";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

export default function EditProfileScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.header, { paddingHorizontal: 0 }]}>
          <AppImage height={50} icon="arrow-left" size={25} borderWidth={0} />
          <Text style={styles.text}>Edit Profile</Text>
        </View>
        <Text style={styles.text}>Done</Text>
      </View>
      <View style={styles.circle}>
        <AppImage
          source={require("../../assets/image.jpg")}
          borderRadius
          height={110}
        />
        <AppImage
          icon="camera-outline"
          borderWidth={0}
          height={40}
          size={22}
          style={styles.camera}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          //   paddingHorizontal: 20,
          width: "100%",
          //   backgroundColor: "red",
          justifyContent: "space-around",
        }}
      >
        <AppTextInput placeholder="First name" width={150} />
        <AppTextInput placeholder="Last name" width={150} />
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <AppTextInput placeholder="usename" />
        <AppTextInput placeholder="Email id" />
        <AppTextInput placeholder="phone number" />
        <AppTextInput placeholder="address" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  text: { color: "#fff", textTransform: "uppercase", marginRight: 10 },
  circle: {
    alignSelf: "center",
    padding: 15,
    //   backgroundColor: "red",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(225,225,225,0.3)",
  },
  camera: {
    backgroundColor: "#000",
    position: "absolute",
    right: -20,
    top: "50%",
  },
});
