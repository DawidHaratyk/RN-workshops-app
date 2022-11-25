import { StyleSheet, View } from "react-native";
import React from "react";
import { PostsList } from "../PostsList/PostsList";
import { StoriesList } from "../StoriesList/StoriesList";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/supabase/getPosts";
import { Header } from "../Typography/Header/Header";
import { supabase } from "../../../supabase";

const postsData = [
  {
    description: "description 1",
    imgName: "https://picsum.photos/id/237/300/200",
  },
  {
    description: "description 3",
    imgName: "https://picsum.photos/id/239/300/200",
  },
  {
    description: "description 4",
    imgName: "https://picsum.photos/id/240/300/200",
  },
  {
    description: "description 5",
    imgName: "https://picsum.photos/id/241/300/200",
  },
  {
    description: "description 6",
    imgName: "https://picsum.photos/id/242/300/200",
  },
  {
    description: "description 7",
    imgName: "https://picsum.photos/id/243/300/200",
  },
  {
    description: "description 8",
    imgName: "https://picsum.photos/id/244/300/200",
  },
];

export const DashboardView = () => {
  const { data, isLoading } = useQuery(["posts"], getPosts);

  const posts = data ?? [];

  if (isLoading) return <Header title="Loading..." variant="h4" />;

  return (
    <View style={styles.dashboardContainer}>
      <StoriesList />
      {isLoading ? (
        <Header title="Loading..." variant="h4" />
      ) : (
        <PostsList data={posts} postDisplayType="show-entire-content" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    paddingVertical: 15,
    paddingBottom: 160,
  },
});
