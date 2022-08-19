import React from "react";

import { StyleSheet, View } from "react-native";
import { Paragraph } from "./Paragraph";

import { Clock, Plate } from "./../assets/img"

export function Info({ prepareTime, servings }) {
  return (
    <View style={styles.infos}>
      <View style={styles.info}>
        <Clock width={38} height={50} />
        <Paragraph style={styles.small}>{prepareTime} min</Paragraph>
      </View>

      <View style={styles.info}>
        <Plate width={50} height={50} />
        <Paragraph>{servings} servings</Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  info: {
    display: "flex",
    alignItems: "center",
  },
});
