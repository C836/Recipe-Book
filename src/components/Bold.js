import React from "react";

import { StyleSheet, Text } from "react-native";

import { useFonts } from "expo-font";

export function Bold({ children }) {
  useFonts({
    "Roboto-Bold": require("./../assets/fonts/Roboto-Bold.ttf"),
  });

  return <Text style={styles.bold}>{children}</Text>;
}

const styles = StyleSheet.create({
  bold: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
  },
});
