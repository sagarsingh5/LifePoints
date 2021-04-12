import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

import Carousel from "react-native-snap-carousel";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Screen from "../components/Screen";

const exampleItems = [
  {
    title: "Item 1",
    text: "Text 1",
  },
  {
    title: "Item 2",
    text: "Text 2",
  },
  {
    title: "Item 3",
    text: "Text 3",
  },
  {
    title: "Item 4",
    text: "Text 4",
  },
  {
    title: "Item 5",
    text: "Text 5",
  },
];

export default function HomeScreen({ navigation: { navigate, goBack } }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);
  const renderItem = useCallback(
    ({ item, index }) => <Cards onPress={() => navigate("AboutScreen")} />,
    []
  );

  return (
    <Screen style={styles.container}>
      <Header onPress={() => navigate("ProfileScreen")} />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#00001F", paddingTop: 50 }}
      >
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            layout="default"
            ref={ref}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
        </View>
      </SafeAreaView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
