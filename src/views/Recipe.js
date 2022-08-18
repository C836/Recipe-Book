import React, { useEffect, useState } from "react";
import { Details } from "../components";
import { Background } from "../components/Background";
import { getRecipe } from "../services/recipe";

export function Recipe() {
  const [recipe, setRecipe] = useState();

  const recipeRequest = () => {
    getRecipe().then((response) => setRecipe(response));
  };

  useEffect(recipeRequest, []);

  if (recipe?.image)
    return (
      <>
        <Background
          image={recipe.image} />
        <Details
          title={recipe.title}
          summary={recipe.summary}
          prepareTime={recipe.readyInMinutes}
          servings={recipe.servings}
        />
      </>
    );
}
