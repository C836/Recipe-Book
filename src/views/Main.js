import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { Search, Highlight } from "../components";
import { getDifficulty } from "../utils/getDifficulty";

//mock
import { highlights } from "./../../mock";

export function Main({ recipeData, setRecipe }) {
  const windowWidth = Dimensions.get("window").width;

  const [ activeSlide, setActiveSlide ] = useState(0)

  const onSlideChange = (index) => {
    setActiveSlide(index)
  }

  const searchId = (id) => {
    setRecipe({ ...recipeData, id: id });
  };

  const cleanText = (string) => {
    const cleared = string.replace(/<\/?[^>]+(>|$)/g, "");
    const dotIndex = cleared.indexOf(".");

    const result = cleared.slice(0, dotIndex);

    if (result.length < 100) {
      return result;
    } else {
      return cleared.slice(0, 80) + "...";
    }
  };

  return (
    <ScrollView style={styles.menu}>
      <View style={styles.globalPadding}>
        <Search searchId={searchId} />
      </View>

      <Carousel
        containerCustomStyle={styles.carousel}
        loop={true}
        enableSnap={true}
        loopClonesPerSide={4}
        data={highlights.recipes}
        sliderWidth={windowWidth}
        itemWidth={280}
        onSnapToItem={(current) => onSlideChange(current)}
        renderItem={({ item, index }) => {
          const { image, title, summary, readyInMinutes } = item;
          const difficulty = getDifficulty(item.analyzedInstructions[0].steps);

          return (
            <Highlight
              key={index}
              cover={image}
              title={title}
              summary={cleanText(summary)}
              prepareTime={readyInMinutes}
              difficulty={"EASY"}
            />
          );
        }}
      />
      <Pagination
        dotsLength={5}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  globalPadding: {
    padding: 18,
    paddingBottom: 0,
  },
  carousel: {
    marginTop: -60
  },
  pagination: {
    backgroundColor: "transparent",
    transform: [{ translateY: -25 }]
  }
});
