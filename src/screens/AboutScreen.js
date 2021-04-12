import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import AppImage from "../components/AppImage";

export default function AboutScreen({ navigation: { goBack } }) {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  return (
    <ImageBackground
      source={require("../../assets/image.jpg")}
      style={{ flex: 1 }}
    >
      <AppImage
        height={50}
        icon="arrow-left"
        size={25}
        borderWidth={0}
        style={styles.icon}
        onPress={() => goBack()}
      />
      <LinearGradient
        colors={["transparent", "#0E0E2C", "#1F142B", "#00001F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
        style={styles.container}
      >
        <Text style={[styles.text, { fontSize: 20 }]}>Name Name</Text>
        <Text style={styles.text}>
          Officia sint ipsum occaecat excepteur id nostrud laboris tempor
          occaecat ex.
        </Text>
        <Text style={styles.text}>
          Deserunt officia nostrud dolore dolore irure ea. Reprehenderit aute do
          laborum dolore sint duis occaecat laborum ex eiusmod enim. Enim
          nostrud exercitation aliquip
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <AppImage
            height={50}
            borderRadius
            icon={like ? "thumb-up" : "thumb-up-outline"}
            iconColor={like ? "green" : "#fff"}
            borderColor={like ? "green" : "#0E4494"}
            size={22}
            style={styles.up}
            onPress={() => {
              setLike(!like);
              setDisLike(false);
            }}
          />
          <AppImage
            height={50}
            borderRadius
            icon={disLike ? "thumb-down" : "thumb-down-outline"}
            iconColor={disLike ? "red" : "#fff"}
            size={22}
            borderColor={disLike ? "red" : "#0E4494"}
            onPress={() => {
              setDisLike(!disLike);
              setLike(false);
            }}
          />
        </View>
        <View style={styles.image}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../../assets/image.jpg")}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15, paddingTop: 50 },
  icon: { marginTop: 25, marginLeft: 15 },
  text: { color: "#fff", marginVertical: 10 },
  up: { marginRight: 10 },
  image: {
    height: 150,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 15,
  },
});
