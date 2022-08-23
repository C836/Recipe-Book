import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Recipe } from "./src/views/Recipe";
import { Main } from "./src/views/Main";
import { getRecipe } from "./src/services/recipe";

import { Provider as PaperProvider } from "react-native-paper";

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
    <PaperProvider>
      <StatusBar
        backgroundColor="#000"
      />
      <Recipe
        recipeData={recipeData}
        setRecipe={setRecipe}
      />
      <Main
        recipeData={recipeData}
        setRecipe={setRecipe}
      />
    </PaperProvider>
  );
}
