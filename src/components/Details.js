import React from "react";

import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";

import { useFonts } from "expo-font";

import { Clock, Plate } from "./../assets/img"

export function Details({ title, summary, prepareTime, servings }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./../assets/fonts/Roboto-Regular.ttf"),
  });

  const cleanText = (string) => {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <SafeAreaView style={styles.details}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.summary}>
        {cleanText(summary).slice(0, 200) + "..."}
      </Text>

      <View style={styles.infos}>
        <View style={styles.info}>
          <Clock width={38} height={50} />
          <Text style={styles.small}>{prepareTime} min</Text>
        </View>

        <View style={styles.info}>
          <Plate width={50} height={50} />
          <Text>{servings} servings</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  details: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 14
  },
  summary: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: 15,
    paddingBottom: 25
  },
  infos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  info: {
    display: "flex",
    alignItems: "center",
  }
});
