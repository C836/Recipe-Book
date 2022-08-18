import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

import { getImageDimensions } from "./../utils/getImageDimensions";

export function Background({ image }) {
  return (
    <Image
      style={styles(getImageDimensions(image)).background}
      source={{ uri: image }}
    />
  );
}

const styles = ({ imgWidth, imgHeight }) =>
  StyleSheet.create({
    background: {
      width: "100%",
      height: (imgHeight / imgWidth) * width,
    },
  });
