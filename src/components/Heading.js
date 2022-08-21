import React from "react";

import { StyleSheet, Text } from "react-native";

import { useFonts } from "expo-font";

export function Heading({ children, style }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./../assets/fonts/Roboto-Regular.ttf"),
  });

  return <Text style={[style, styles.heading]}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 24
  },
});
