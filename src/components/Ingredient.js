import { Roboto_100Thin } from "@expo-google-fonts/roboto";
import React from "react";

import { StyleSheet, View } from "react-native";
import { Paragraph } from "./Paragraph";

export function Ingredient({ index, children }) {
  return (
    <View style={style.ingredient}>
      <View style={style.dot} />
      <Paragraph style={{ width: "96%" }}>{children}</Paragraph>
    </View>
  );
}

const style = StyleSheet.create({
  dot: {
    backgroundColor: "red",
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 10,
  },
  ingredient: {
    position: "relative",
    paddingBottom: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
