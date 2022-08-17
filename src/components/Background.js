import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;

export function Background({ recipe }) {
  return (
    <Image
      style={styles.background}
      source={{ uri: recipe?.images.REGULAR.url }}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: (100 / 100) * width,
  },
});
