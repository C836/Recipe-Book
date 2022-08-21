import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { useFonts } from "expo-font";

import {
  Background,
  Heading,
  Paragraph,
  Bold,
  Info,
  Ingredient,
  Instruction,
  Return
} from "./../components";

export function Recipe({ recipeData, setRecipe }) {
  const { recipe } = recipeData;

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./../assets/fonts/Roboto-Regular.ttf"),
  });

  const cleanText = (string) => {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const clearRecipe = () => {
    setRecipe({ ...recipeData, recipe: null });
  };

  if (recipe) {
    const {
      title,
      summary,
      readyInMinutes,
      servings,
      extendedIngredients,
      analyzedInstructions,
    } = recipe;

    return (
      <SafeAreaView>
        <Background image={recipe.image} />
        <ScrollView style={styles.details}>
          <Heading style={{ paddingBottom: 15 }}>{title}</Heading>
          <Paragraph style={{ paddingBottom: 25 }}>
            {cleanText(summary).slice(0, 200) + "..."}
          </Paragraph>

          <Info
            style={{ paddingBottom: 18 }}
            prepareTime={readyInMinutes}
            servings={servings}
          />

          <Bold style={{ paddingBottom: 20 }}>Ingredients</Bold>

          {extendedIngredients.map((item, index) => (
            <Ingredient key={index}>{item.original}</Ingredient>
          ))}

          <Bold style={{ paddingBottom: 20, paddingTop: 10 }}>Cooking</Bold>

          {analyzedInstructions[0].steps.map((item) => (
            <Instruction index={item.number} key={item.number}>
              {item.step}
            </Instruction>
          ))}
        </ScrollView>
        <Return returnFunction={clearRecipe} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  details: {
    marginTop: 200,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
    backgroundColor: "white",
  },
});
