import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppImage from "../components/AppImage";
import Screen from "../components/Screen";

export default function ProfileScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.header, { paddingHorizontal: 0 }]}>
          <AppImage height={50} icon="arrow-left" size={25} borderWidth={0} />
          <Text style={styles.text}>Profile</Text>
        </View>
        <Text style={styles.text}>Logout</Text>
      </View>
      <View style={styles.circle}>
        <AppImage
          source={require("../../assets/image.jpg")}
          borderRadius
          height={110}
        />
      </View>
      <Text
        style={{ alignSelf: "center", color: "#fff", fontSize: 20, margin: 20 }}
      >
        Name Name
      </Text>
      <View>
        <View
          style={{
            height: 150,
            width: "100%",
            // backgroundColor: "red",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View>
            <View style={styles.circle}>
              <AppImage
                height={80}
                borderRadius
                source={require("../../assets/image.jpg")}
              />
            </View>
            <Text style={[styles.text, { textAlign: "center" }]}>Level</Text>
          </View>
          <View>
            <View style={styles.circle}>
              <AppImage
                height={80}
                borderRadius
                source={require("../../assets/image.jpg")}
              />
            </View>
            <Text style={[styles.text, { textAlign: "center" }]}>Points</Text>
          </View>
        </View>
        <View
          style={{
            height: 150,
            width: "100%",
            // backgroundColor: "red",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View style={styles.circle}>
              <AppImage
                height={80}
                borderRadius
                source={require("../../assets/image.jpg")}
              />
            </View>
            <Text style={[styles.text, { textAlign: "center", width: 100 }]}>
              Monthly Ranking
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.circle}>
              <AppImage
                height={80}
                borderRadius
                source={require("../../assets/image.jpg")}
              />
            </View>
            <Text style={[styles.text, { textAlign: "center", width: 100 }]}>
              Yearly Ranking
            </Text>
          </View>
        </View>
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
  text: { color: "#fff", textTransform: "uppercase" },
  circle: {
    alignSelf: "center",
    padding: 15,
    //   backgroundColor: "red",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(225,225,225,0.3)",
  },
});
