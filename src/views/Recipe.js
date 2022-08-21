import React, { useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Details } from "../components";
import { Background } from "../components/Background";
import { Return } from "../components/Return";

export function Recipe({ recipeData, setRecipe }) {
  const { recipe } = recipeData;

  const clearRecipe = () => {
    setRecipe({ ...recipeData, recipe: null });
  };

  if (recipe) {
    return (
      <SafeAreaView>
        <Background
          image={recipe.image} />
        <ScrollView>
          <Details
            title={recipe.title}
            summary={recipe.summary}
            prepareTime={recipe.readyInMinutes}
            servings={recipe.servings}
            ingredients={recipe.extendedIngredients}
            instructions={recipe.analyzedInstructions[0].steps}
          />
        </ScrollView>
        <Return
          returnFunction={clearRecipe} />
      </SafeAreaView>
    );
  }
}
