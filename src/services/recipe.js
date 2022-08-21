import axios from "react-native-axios";
import { API_KEY } from "@env"

const BASE_URL = "https://api.spoonacular.com/recipes/";

export function getRecipe(id) {
  return axios.get(BASE_URL + id + "/information", {
    params: {
      apiKey: API_KEY,
    },
  }).then(response => {
    return response.data;
  });
}