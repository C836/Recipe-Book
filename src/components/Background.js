import React from "react";
import { StyleSheet, Image } from "react-native";

export function Background({ image }) {
  return <Image style={styles.background} source={{ uri: image }} />;
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: 225,
  },
});
