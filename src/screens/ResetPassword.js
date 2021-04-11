import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import AppImage from "../components/AppImage";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo//vector-icons";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

export default function ResetPassword({ navigation: { navigate, goBack } }) {
  return (
    <Screen style={styles.container}>
      {/* 1st Container */}
      <AppImage height={150} source={require("../../assets/logo.png")} />
      {/* 2nd Container */}
      <View style={styles.content}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginBottom: 15,
          }}
        >
          <TouchableOpacity onPress={() => goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={35} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Reset Password</Text>
        </View>
        <Text style={styles.text}>
          Email Address verified set a new password
        </Text>
      </View>
      {/* 3rd Container */}
      <View style={styles.content}>
        <AppTextInput placeholder="new password" />
        <AppTextInput placeholder="re-enter password" />
      </View>
      {/* 4th Container */}
      <View style={styles.content}>
        <AppButton
          title="Reset Password"
          backgroundColor="#2679E1"
          onPress={() => navigate("LoginScreen")}
          style={{ marginBottom: 20 }}
        />
        <Text onPress={() => navigate("LoginScreen")} style={styles.text}>
          Have an account Login
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 35,
    justifyContent: "space-around",
  },
  headerText: {
    fontSize: 25,
    color: "#fff",
    marginHorizontal: 10,
  },
  content: {
    width: "100%",
    alignItems: "center",
    // backgroundColor: "red",
  },
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
    elevation: 5,
    borderColor: "#a9a9a9",
    // backgroundColor: "#fff",
  },
  cellText: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  },
  text: { color: "#fff", fontSize: 12, lineHeight: 20 },
});
