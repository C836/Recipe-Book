import axios from "react-native-axios";
import { APP_ID, APP_KEY } from "@env"

const BASE_URL = "https://api.edamam.com/api/recipes/v2/";

export function getRecipe() {
  return axios.get(BASE_URL + "b79327d05b8e5b838ad6cfd9576b30b6", {
    params: {
      type: "public",
      app_id: APP_ID,
      app_key: APP_KEY,
    },
  }).then(response => {
    return response.data;
  });
}