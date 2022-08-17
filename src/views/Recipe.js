import React, { useEffect, useState } from "react";
import { getRecipe } from "../services/recipe";

export function Recipe() {
  const [recipe, setRecipe] = useState();

  const recipeRequest = () => {
    getRecipe().then((response) => setRecipe(response.recipe));
  };

  useEffect(recipeRequest, []);
}
