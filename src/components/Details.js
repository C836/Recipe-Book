import React from "react";

import { Text } from "react-native";

export function Details({ title, summary, prepareTime, servings }) {
  const cleanText = (string) => {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <>
      <Text>{title}</Text>
      <Text>{cleanText(summary).slice(0, 200) + "..."}</Text>
      <Text>Prepare time: {prepareTime}min</Text>
      <Text>Servings: {servings}</Text>
    </>
  );
}
