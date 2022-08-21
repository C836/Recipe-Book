import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Recipe } from "./src/views/Recipe";
import { Main } from "./src/views/Main";

export default function App() {
  const [recipeData, setRecipe] = useState({
    id: null,
    data: null,
  });

  useEffect(() => {
    console.log(recipeData);
  }, [recipeData]);

  return (
    <SafeAreaView>
      <StatusBar />
      <Recipe />
      <Main 
        recipedata={recipeData} 
        setRecipe={setRecipe} />
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
