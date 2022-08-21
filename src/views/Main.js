import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Search } from "../components/Search";

export function Main({ recipeData, setRecipe }) {
  handleSearch = (id) => {
    setRecipe({ ...recipeData, id: id });
  };

  return (
    <SafeAreaView style={styles.list}>
      <Search setRecipe={setRecipe} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 12,
  },
});
