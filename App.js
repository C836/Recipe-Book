import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Recipe } from "./src/views/Recipe";
import { Main } from "./src/views/Main";
import { getRecipe } from "./src/services/recipe";

export default function App() {
  const [recipeData, setRecipe] = useState({
    id: null,
    recipe: null,
  });

  const recipeSearch = () => {
    if (recipeData.id) {
      getRecipe(recipeData.id).then((response) =>
        setRecipe({ ...recipeData, recipe: response })
      );
    }
  };

  useEffect(recipeSearch, [recipeData.id]);

  return (
    <SafeAreaView>
      <StatusBar />
      <Recipe
        recipeData={recipeData}
        setRecipe={setRecipe}
      />
      <Main
        recipeData={recipeData}
        setRecipe={setRecipe}
      />
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
