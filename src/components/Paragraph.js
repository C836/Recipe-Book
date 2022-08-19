import React from "react";

import { StyleSheet, Text } from "react-native";

import { useFonts } from "expo-font";

export function Paragraph({ children }) {
  useFonts({
    "Roboto-Regular": require("./../assets/fonts/Roboto-Regular.ttf"),
  });

  return <Text style={styles.paragraph}>{children}</Text>;
}

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: 15
  },
});
