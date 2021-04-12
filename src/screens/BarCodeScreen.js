import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import Screen from "../components/Screen";

export default function BarCodeScreen({ navigation: { navigate, goBack } }) {
  return (
    <Screen>
      <Header onPress={() => navigate("ProfileScreen")} />
      <View
        style={{
          flex: 1,
          //   backgroundColor: "red",
          padding: 15,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            textTransform: "uppercase",
            alignSelf: "flex-start",
          }}
        >
          Digital Member Card
        </Text>
        <View
          style={{
            flex: 1,
            // backgroundColor: "blue",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.image}>
            <Image
              style={{ height: "100%", width: "100%" }}
              source={require("../../assets/image.jpg")}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: {
    height: 230,
    width: 230,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 15,
  },
});
