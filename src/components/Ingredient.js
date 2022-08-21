import React from "react";

import { StyleSheet, View, Text } from "react-native";
import { Paragraph } from "./Paragraph";

export function Ingredient({ children }) {
  const getAmount = (text) => {
    return text.split(" ")[0];
  };

  const getIngredient = (text) => {
    return text.replace(getAmount(children), "");
  };

  return (
    <View style={style.ingredient}>
      <View style={style.dot} />
      <Paragraph style={{ width: "96%" }}>
        <Text style={{ fontWeight: "bold" }}>{getAmount(children)}</Text>
        {getIngredient(children)}
      </Paragraph>
    </View>
  );
}

const style = StyleSheet.create({
  dot: {
    backgroundColor: "red",
    width: 6,
    height: 6,
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
