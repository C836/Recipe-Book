import axios from "react-native-axios";
import { API_KEY } from "@env"

const BASE_URL = "https://api.spoonacular.com/recipes/";

export function recipeSearch(query) {
  return axios.get(BASE_URL + "complexSearch", {
    params: {
      query: query,
      number: 6,
      apiKey: API_KEY
    },
  }).then(response => {
    return response.data;
  });
}
