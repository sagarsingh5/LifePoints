import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Modal, Image } from "react-native";
import Header from "../components/Header";
import ModalScreen from "../components/ModalScreen";
import Screen from "../components/Screen";
import ShoppingCards from "../components/ShoppingCards";

export default function ShoppingScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const blocks = [
    {
      id: 1,
      title: "Sceince",
      poster:
        "https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg",
      description:
        "Nulla eu consequat sint minim in minim culpa sunt qui minim ex velit magna. Et ex id mollit ea ex consectetur ea. Reprehenderit sit pariatur et nisi sunt quis consequat mollit in cillum veniam nostrud voluptate excepteur. Magna et dolore cillum Lorem et Lorem ipsum officia consectetur est esse. Pariatur aliquip officia amet reprehenderit nostrud qui nulla do anim in do. Ex esse laboris proident laboris proident commodo consectetur qui in labore quis eiusmod laborum tempor. Cillum duis consectetur exercitation consequat incididunt tempor ex consequat ex nisi id officia sunt cillum.",
    },
    {
      id: 2,
      title: "Travel",
      poster:
        "https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg",
      description:
        "Nulla eu consequat sint minim in minim culpa sunt qui minim ex velit magna. Et ex id mollit ea ex consectetur ea. Reprehenderit sit pariatur et nisi sunt quis consequat mollit in cillum veniam nostrud voluptate excepteur. Magna et dolore cillum Lorem et Lorem ipsum officia consectetur est esse. Pariatur aliquip officia amet reprehenderit nostrud qui nulla do anim in do. Ex esse laboris proident laboris proident commodo consectetur qui in labore quis eiusmod laborum tempor. Cillum duis consectetur exercitation consequat incididunt tempor ex consequat ex nisi id officia sunt cillum.",
    },
    {
      id: 3,
      title: "Tech",
      poster:
        "https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg",
      description:
        "Nulla eu consequat sint minim in minim culpa sunt qui minim ex velit magna. Et ex id mollit ea ex consectetur ea. Reprehenderit sit pariatur et nisi sunt quis consequat mollit in cillum veniam nostrud voluptate excepteur. Magna et dolore cillum Lorem et Lorem ipsum officia consectetur est esse. Pariatur aliquip officia amet reprehenderit nostrud qui nulla do anim in do. Ex esse laboris proident laboris proident commodo consectetur qui in labore quis eiusmod laborum tempor. Cillum duis consectetur exercitation consequat incididunt tempor ex consequat ex nisi id officia sunt cillum.",
    },
    {
      id: 4,
      title: "Gaming",
      poster:
        "https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg",
      description:
        "Nulla eu consequat sint minim in minim culpa sunt qui minim ex velit magna. Et ex id mollit ea ex consectetur ea. Reprehenderit sit pariatur et nisi sunt quis consequat mollit in cillum veniam nostrud voluptate excepteur. Magna et dolore cillum Lorem et Lorem ipsum officia consectetur est esse. Pariatur aliquip officia amet reprehenderit nostrud qui nulla do anim in do. Ex esse laboris proident laboris proident commodo consectetur qui in labore quis eiusmod laborum tempor. Cillum duis consectetur exercitation consequat incididunt tempor ex consequat ex nisi id officia sunt cillum.",
    },
    {
      id: 5,
      title: "Gamings",
      poster:
        "https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg",
      description:
        "Nulla eu consequat sint minim in minim culpa sunt qui minim ex velit magna. Et ex id mollit ea ex consectetur ea. Reprehenderit sit pariatur et nisi sunt quis consequat mollit in cillum veniam nostrud voluptate excepteur. Magna et dolore cillum Lorem et Lorem ipsum officia consectetur est esse. Pariatur aliquip officia amet reprehenderit nostrud qui nulla do anim in do. Ex esse laboris proident laboris proident commodo consectetur qui in labore quis eiusmod laborum tempor. Cillum duis consectetur exercitation consequat incididunt tempor ex consequat ex nisi id officia sunt cillum.",
    },
  ];
  return (
    <Screen style={styles.container}>
      <Header />
      <View style={{ padding: 15 }}>
        <Text
          style={[
            styles.text,
            { textTransform: "uppercase", marginVertical: 10 },
          ]}
        >
          Shop
        </Text>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            data={blocks}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({}) => <ShoppingCards height={170} />}
          />
          <FlatList
            data={blocks}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({}) => (
              <ShoppingCards
                alignItems="left"
                onPress={() => setModalVisible(true)}
              />
            )}
          />
        </View>
      </View>
      <ModalScreen
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "#fff",
    // margin: 15,
  },
});
