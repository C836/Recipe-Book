import React from "react";

import { Text } from "react-native";

import {
  useFonts,
  Raleway_100Thin,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
} from "@expo-google-fonts/raleway";

export function Paragraph({ style, children, size, weight, color, height }) {
  let [fontsLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
  });

  const fontSize = size ? size : 16;
  const fontWeight = weight ? `Raleway_${weight}` : "Raleway_400Regular";
  const fontColor = color ? color : "black";
  const fontHeight = height && height

  if (fontsLoaded) {
    return (
      <Text
        style={[
          style,
          {
            fontSize: fontSize,
            fontFamily: fontWeight,
            color: fontColor,
            lineHeight: fontHeight,
          },
        ]}
      >
        {children}
      </Text>
    );
  }
}
