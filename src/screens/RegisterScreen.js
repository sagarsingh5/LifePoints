import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AppButton from "../components/AppButton";
import AppImage from "../components/AppImage";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { Ionicons } from "@expo/vector-icons";

export default function RegisterScreen({ navigation: { navigate, goBack } }) {
  const cards = [
    {
      id: 1,
      title: "Male",
      icon: "man",
    },
    {
      id: 2,
      title: "Female",
      icon: "woman",
    },
    {
      id: 3,
      title: "Other",
      icon: "man",
    },
  ];
  const [selected, setSelected] = useState("Male");
  return (
    <Screen style={styles.container}>
      <AppImage height={75} icon="camera-wireless" text="Profile Picture" />
      <View style={[styles.content]}>
        <Text style={{ color: "#fff" }}>Gender</Text>
        <FlatList
          data={cards}
          horizontal
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <TouchableOpacity
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      selected === item.title ? "#1E73DD" : "transparent",
                  },
                ]}
                onPress={() => setSelected(item.title)}
              >
                <Ionicons
                  name={
                    selected === item.title ? item.icon : `${item.icon}-outline`
                  }
                  size={22}
                  color="#fff"
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: 10,
                  marginVertical: 5,
                }}
              >
                {item.title}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.content}>
        <AppTextInput placeholder="Username" />
        <AppTextInput placeholder="Email" />

        <AppTextInput placeholder="password" secureTextEntry={true} />
        <AppTextInput placeholder="confirm password" secureTextEntry={true} />

        <Text onPress={() => navigate("ForgotPassword")} style={styles.text}>
          Forgot Password?
        </Text>
      </View>
      <View style={styles.content}>
        <AppButton
          title="Create Account"
          backgroundColor="#2679E1"
          onPress={() => navigate("VerificationScreen")}
          style={styles.button}
        />
        <Text
          onPress={() => navigate("LoginScreen")}
          style={[styles.text, { alignSelf: "center" }]}
        >
          Have an acoount? Log in
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
    alignItems: "center",
    // backgroundColor: "red",
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
    // justifyContent: "space-between",
  },
});
