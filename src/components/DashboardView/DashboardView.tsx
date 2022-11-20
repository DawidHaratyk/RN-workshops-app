import { StyleSheet, View } from "react-native";
import React from "react";
import { PostsList } from "../PostsList/PostsList";
import { PostProps } from "../../types";
import { StoriesList } from "../StoriesList/StoriesList";

const postsData: PostProps[] = [
  {
    name: "name 1",
    image: require("../../images/graphic1.jpg"),
    amountOfLikes: 8,
    commentAuthor: "Somebody 1",
    comment: "XDZXDXDXDXDXD",
    id: 1,
  },
  {
    name: "name 2",
    image: require("../../images/graphic1.jpg"),
    amountOfLikes: 14,
    commentAuthor: "Somebody 2",
    comment: "XDZXDXDXDXDXDXDXDXDXDXDXD",
    id: 2,
  },
  {
    name: "name 3",
    image: require("../../images/graphic1.jpg"),
    amountOfLikes: 10,
    commentAuthor: "Somebody 3",
    comment: "XDZXDXDXDXDXD",
    id: 3,
  },
  {
    name: "name 4",
    image: require("../../images/graphic1.jpg"),
    amountOfLikes: 14,
    commentAuthor: "Somebody 4",
    comment: "XDZXDXDXDXDXD",
    id: 4,
  },
];

export const DashboardView = () => {
  return (
    <View style={styles.dashboardContainer}>
      <StoriesList />
      <PostsList data={postsData} postDisplayType="show-entire-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    paddingVertical: 15,
  },
});
