import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Recipe } from "./src/views/Recipe";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Recipe />
    </SafeAreaView>
  );
}

export const theme = {
  dark: false,
  colors: {
    primary: "#de281c",
    background: "#fff",
    text: "#fff"
  },
};
