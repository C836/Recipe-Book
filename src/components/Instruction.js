import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Paragraph } from "./Paragraph";

export function Instruction({ index, children }) {
  return (
    <View style={style.ingredient}>
      <Text style={style.index}>{index}</Text>
      <Paragraph style={{ width: "94%" }}>{children}</Paragraph>
    </View>
  );
}

const style = StyleSheet.create({
  index: {
    fontWeight: "bold",
    paddingRight: 12
  },
  ingredient: {
    position: "relative",
    paddingBottom: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
