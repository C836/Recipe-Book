import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";

import { useFonts } from "expo-font";

import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Bold } from "./Bold";
import { Info } from "./Info";

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

      <Info prepareTime={50} servings={3} />

      <Bold style={styles.title}>Ingredients</Bold>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  details: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15
  }
});
