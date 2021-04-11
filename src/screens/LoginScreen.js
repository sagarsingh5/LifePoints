import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppImage from "../components/AppImage";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

export default function LoginScreen({ navigation: { navigate } }) {
  return (
    <Screen style={styles.container}>
      <AppImage height={200} source={require("../../assets/logo.png")} />
      <View style={styles.content}>
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="password" secureTextEntry={true} />
        <Text onPress={() => navigate("ForgotPassword")} style={styles.text}>
          Forgot Password?
        </Text>
      </View>
      <View style={styles.content}>
        <AppButton
          title="Login"
          backgroundColor="#2679E1"
          onPress={() => navigate("TabNav")}
          style={styles.button}
        />
        <Text
          onPress={() => navigate("RegisterScreen")}
          style={[styles.text, { alignSelf: "center" }]}
        >
          Dont have an acoount? Create one
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
  text: {
    color: "#fff",
    fontSize: 10,
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  content: {
    width: "100%",
  },
});
