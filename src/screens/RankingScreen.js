import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, FlatList } from "react-native";
import Header from "../components/Header";
import List from "../components/List";
import Screen from "../components/Screen";

export default function RankingScreen({ navigation: { navigate, goBack } }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const count = 1;
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
      <Header onPress={() => navigate("ProfileScreen")} />
      <View style={styles.header}>
        <Text style={[styles.text, { textTransform: "uppercase" }]}>
          Ranking
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Monthly</Text>
          <Switch
            trackColor="#181835"
            thumbColor="#36C7FF"
            ios_backgroundColor="#181835"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.text}>Yearly</Text>
        </View>
      </View>

      <FlatList
        data={blocks}
        keyExtractor={(data) => data.id.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "80%",
              backgroundColor: "#a9a9a9",
              borderRadius: 0.5,
              alignSelf: "center",
              // marginHorizontal: 15,
            }}
          />
        )}
        renderItem={({ items }) => {
          return <List count={count} />;
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "#fff",
    marginHorizontal: 5,
  },
});
