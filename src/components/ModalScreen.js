import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import AppButton from "./AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppImage from "./AppImage";
import AppTextInput from "./AppTextInput";

export default function ModalScreen({ modalVisible, setModalVisible }) {
  const [screen, setScreen] = useState("1");
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      //   setModalVisible(!modalVisible);
      // }}
    >
      <View style={styles.container}>
        {screen === "1" && (
          <View style={{ justifyContent: "space-between" }}>
            <View style={{ width: "100%", height: "40%" }}>
              <Image
                style={{ height: "100%", width: "100%" }}
                source={require("../../assets/image.jpg")}
              />
            </View>
            <View style={{ justifyContent: "space-between" }}>
              <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.text}>Adidas</Text>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 16, marginLeft: 10, fontWeight: "normal" },
                    ]}
                  >
                    10% off
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}
                  >
                    300
                  </Text>
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 8,
                      textTransform: "uppercase",
                    }}
                  >
                    points
                  </Text>
                </View>
              </View>
              <View style={{ padding: 15 }}>
                <Text style={{ color: "#fff" }}>
                  Cupidatat anim sunt ea eu commodoLorem ex nulla voluptate.
                  Aute cupidatat veniam reprehenderit reprehenderit et velit.
                </Text>
              </View>
              <View style={{ paddingHorizontal: 10 }}>
                <AppButton
                  title="BUY NOW"
                  backgroundColor="#2578E0"
                  //   style={styles.button}
                  onPress={() => setScreen("3")}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.close}
            >
              <MaterialCommunityIcons
                name="close-thick"
                size={16}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        )}
        {screen === "2" && (
          <View
            style={{
              flex: 1,
              padding: 10,
              alignItems: "center",
              // backgroundColor: "red",
              paddingTop: 40,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setScreen("1");
              }}
              style={[styles.close, { left: 10, top: 10, right: null }]}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
            <AppImage
              icon="check"
              height={50}
              borderRadius
              size={28}
              borderColor="#36C7FF"
              iconColor="#36C7FF"
            />
            <Text
              style={[
                styles.text,
                { fontSize: 12, marginVertical: 15, textTransform: "none" },
              ]}
            >
              Thank you for your purchase!
            </Text>
            <View
              style={{
                width: "80%",
                height: 1,
                backgroundColor: "#a9a9a9",
                marginVertical: 10,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                // backgroundColor: "yellow",
                width: "100%",
                justifyContent: "space-between",
                padding: 10,
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={[styles.text, { fontSize: 16, textTransform: "none" }]}
                >
                  Adidas 10% Off
                </Text>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 14,
                      textTransform: "none",
                      textAlign: "center",
                    },
                  ]}
                >
                  Jun-July,2020
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 12,
                      textTransform: "none",
                      textAlign: "center",
                    },
                  ]}
                >
                  300
                </Text>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 8,
                      textTransform: "uppercase",
                      textAlign: "center",
                    },
                  ]}
                >
                  points
                </Text>
              </View>
            </View>
          </View>
        )}
        {screen === "3" && (
          <View>
            <View
              style={{
                height: 90,
                backgroundColor: "#3C347A",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: "100%",
                  width: "100%",
                  justifyContent: "space-between",
                  padding: 20,
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 16, textTransform: "none" },
                    ]}
                  >
                    Adidas 10% Off
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 14,
                        textTransform: "none",
                        textAlign: "center",
                      },
                    ]}
                  >
                    Jun-July,2020
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 12,
                        textTransform: "none",
                        textAlign: "center",
                      },
                    ]}
                  >
                    300
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 8,
                        textTransform: "uppercase",
                        textAlign: "center",
                      },
                    ]}
                  >
                    points
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    //   paddingHorizontal: 20,
                    width: "100%",
                    //   backgroundColor: "red",
                    justifyContent: "space-around",
                    // marginBottom: 10,
                  }}
                >
                  <AppTextInput placeholder="First name" width={130} />
                  <AppTextInput placeholder="Last name" width={130} />
                </View>
                <View style={{ paddingHorizontal: 15, marginBottom: 10 }}>
                  <AppTextInput placeholder="usename" />

                  <AppTextInput placeholder="phone number" />
                  <AppTextInput placeholder="address" />
                </View>
              </View>
            </View>
            <AppButton
              title="BUY NOW"
              backgroundColor="#2578E0"
              style={styles.button}
              onPress={() => setScreen("2")}
            />
            <TouchableOpacity
              onPress={() => {
                setScreen("1");
                setModalVisible(false);
              }}
              style={styles.close}
            >
              <MaterialCommunityIcons
                name="close-thick"
                size={16}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 100,
    backgroundColor: "#171732",
    borderTopLeftRadius: 20,
    borderBottomEndRadius: 20,
    marginBottom: 60,
    overflow: "hidden",
  },
  header: {
    // backgroundColor: "red",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
  close: {
    position: "absolute",
    right: 0,
    // top: -15,
    borderRadius: 30,
    backgroundColor: "#000",
    zIndex: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    top: 390,
  },
});
