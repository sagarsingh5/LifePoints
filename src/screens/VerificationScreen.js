import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";
import AppImage from "../components/AppImage";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo//vector-icons";
import AppButton from "../components/AppButton";

export default function VerificationScreen({
  navigation: { navigate, goBack },
}) {
  let textInput = useRef(null);
  const lengthInput = 4;
  const [intervalVal, setIntervalVal] = useState("");

  const onChangeText = (val) => {
    setIntervalVal(val);
  };

  useEffect(() => {
    textInput.focus();
  }, []);
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
          <MaterialCommunityIcons name="arrow-left" size={35} color="#fff" />
          <Text style={styles.headerText}>Verification</Text>
        </View>
        <Text style={styles.text}>
          We have sent you a verification code to your email ID
          youremail@gmail.com
        </Text>
      </View>
      {/* 3rd Container */}
      <View style={[styles.content]}>
        <TextInput
          ref={(input) => (textInput = input)}
          onChangeText={onChangeText}
          style={{ height: 0, width: 0 }}
          value={intervalVal}
          maxLength={lengthInput}
          returnKeyType="done"
          keyboardType="numeric"
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Array(lengthInput)
            .fill()
            .map((data, index) => (
              <TouchableHighlight
                key={index}
                style={styles.cellView}
                onPress={() => {
                  textInput.focus();
                  // console.log("pressed");
                }}
              >
                <Text style={styles.cellText}>
                  {intervalVal && intervalVal.length > 0
                    ? intervalVal[index]
                    : ""}
                </Text>
              </TouchableHighlight>
            ))}
        </View>
        <Text style={styles.text}>Don't recieve the code?</Text>
      </View>
      {/* 4th Container */}
      <View style={styles.content}>
        <AppButton
          title="Verify"
          backgroundColor="#2679E1"
          onPress={() => navigate("TabNav")}
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
