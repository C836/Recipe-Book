import React from "react";

import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";

import { useFonts } from "expo-font";

import { Clock, Plate } from "./../assets/img"
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Bold } from "./Bold";

export function Details({ title, summary, prepareTime, servings }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./../assets/fonts/Roboto-Regular.ttf"),
  });

  const cleanText = (string) => {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <SafeAreaView style={styles.details}>
      <Heading>{title}</Heading>
      <Paragraph style={styles.summary}>
        {cleanText(summary).slice(0, 200) + "..."}
      </Paragraph>

      <View style={styles.infos}>
        <View style={styles.info}>
          <Clock width={38} height={50} />
          <Paragraph style={styles.small}>{prepareTime} min</Paragraph>
        </View>

        <View style={styles.info}>
          <Plate width={50} height={50} />
          <Paragraph>{servings} servings</Paragraph>
        </View>
      </View>

      <Bold style={styles.title}>Ingredients</Bold>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  details: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15
  },
  infos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  info: {
    display: "flex",
    alignItems: "center",
  }
});
