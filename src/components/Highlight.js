import { StyleSheet, View } from "react-native";
import { Card, Divider } from "react-native-paper";

import { Paragraph } from "./Paragraph";

export function Highlight({ cover, title, summary, prepareTime, difficulty }) {
  return (
    <Card style={styles.daily} elevation={0}>
      <Card.Cover
        style={styles.daily.cover}
        source={{ uri: cover }}
      />
      <Card.Content style={styles.daily.content}>
        <Paragraph
          style={styles.daily.content.title}
          weight={"700Bold"}
          size={18}
        >
          {title}
        </Paragraph>
        <Paragraph
          style={styles.daily.content.summary}
          size={13}
          height={22}
          color={"#999999"}
        >
          {summary}
        </Paragraph>
        <View
          style={styles.daily.content.info}
        >
          <Paragraph
            size={14}
            weight={"600SemiBold"}
          >
            {prepareTime + " MIN"}
          </Paragraph>
          <Divider
            style={styles.daily.content.info.divider}
          />
          <Paragraph
            size={14}
            weight={"600SemiBold"}
          >
            {difficulty}
          </Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  daily: {
    marginTop: 25,
    backgroundColor: "transparent",
    cover: {
      borderRadius: 25,
      width: "100%",
      height: 250,
      transform: [{ translateY: 60 }],
    },
    content: {
      backgroundColor: "white",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 30,
      shadowOpacity: 0.3,
      elevation: 14,
      display: "flex",
      alignItems: "center",
      borderRadius: 15,
      width: "85%",
      marginLeft: "7.5%",
      marginBottom: 30,
      title: {
        marginTop: 14,
        textAlign: "center",
      },
      summary: {
        textAlign: "center",
        marginTop: 10,
      },
      info: {
        marginTop: 12,
        display: "flex",
        flexDirection: "row",
        divider: {
          width: 1,
          height: "100%",
          marginLeft: 16,
          marginRight: 16,
        },
      },
    },
  },
});
