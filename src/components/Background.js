import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Overlay } from "../assets/img";

export function Background({ image }) {
  return (
    <>
      <Image style={styles.background} source={{ uri: image }} />
      <Overlay style={styles.overlay} />
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute"
  },
  background: {
    position: "absolute",
    width: "100%",
    height: 225
  },
});
