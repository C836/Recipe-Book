import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import { useFonts } from "expo-font";

import {
  Background,
  Paragraph,
  Info,
  Ingredient,
  Instruction,
  Return,
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
        <Background
          style={recipe.background}
          image={recipe.image}
        />
        <ScrollView>
          <View
            style={styles.details}
          >
            <Paragraph
              style={styles.details.title}
              weight={"700Bold"}
              size={25}
            >
              {title}
            </Paragraph>
            <Paragraph
              style={styles.details.summary}
              weight={"300Light"}
              height={22}
            >
              {cleanText(summary).slice(0, 200) + "..."}
            </Paragraph>

            <Info
              style={styles.details.info}
              prepareTime={readyInMinutes}
              servings={servings}
            />

            <Paragraph
              style={styles.details.ingredients}
              weight={"600SemiBold"}
              size={20}
            >
              Ingredients
            </Paragraph>

            {extendedIngredients.map((item, index) => (
              <Ingredient
                key={index}
              >
                {item.original}
              </Ingredient>
            ))}

            <Paragraph
              style={styles.details.cooking}
              weight={"600SemiBold"}
              size={20}
            >
              Cooking
            </Paragraph>

            {analyzedInstructions[0].steps.map((item) => (
              <Instruction
                key={item.number}
                index={item.number}
              >
                {item.step}
              </Instruction>
            ))}
          </View>
        </ScrollView>
        <Return
          returnFunction={clearRecipe}
        />
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
    title: {
      paddingBottom: 15
    },
    summary: {
      paddingBottom: 25
    },
    info: {
      paddingBottom: 18
    },
    ingredients: {
      paddingBottom: 20
    },
    cooking: {
      paddingBottom: 20,
      paddingTop: 10
    }
  },
});
