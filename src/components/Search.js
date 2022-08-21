import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { useState } from "react";
import { recipeSearch } from "../services/recipeSearch";

export function Search({setRecipe}) {
  const [suggestionsList, setSuggestionsList] = useState(null);

  const onSelectItem = (item) => {
    if (item) {
      setRecipe(item.id);
    }
  };

  const onChangeText = (text) => {
    if (text.length > 2) {
      recipeSearch(text).then((response) =>
        setSuggestionsList(response.results)
      );
    } else {
      setSuggestionsList([]);
    }
  };

  const onClear = () => {
    setSuggestionsList([])
  }

  return (
    <AutocompleteDropdown
      clearOnFocus={false}
      closeOnBlur={false}
      closeOnSubmit={false}
      resetOnSelect={true}
      useFilter={false}
      debounce={600}
      onSelectItem={onSelectItem}
      onChangeText={onChangeText}
      onClear={onClear}
      textInputProps={{
        placeholder: "What will we cook today?",
        placeholderTextColor: "#999",
      }}
      dataSet={suggestionsList}
    />
  );
}
