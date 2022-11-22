import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { PostsList } from "../PostsList/PostsList";
import { PostProps } from "../../types";
import { StoriesList } from "../StoriesList/StoriesList";
import { supabase } from "../../../supabase";
import { useQuery } from "@tanstack/react-query";
import { PostgrestResponse } from "@supabase/supabase-js";

// const postsData: PostProps[] = [
//   {
//     name: "name 1",
//     image: require("../../images/graphic1.jpg"),
//     amountOfLikes: 8,
//     commentAuthor: "Somebody 1",
//     comment: "XDZXDXDXDXDXD",
//     id: 1,
//   },
//   {
//     name: "name 2",
//     image: require("../../images/graphic1.jpg"),
//     amountOfLikes: 14,
//     commentAuthor: "Somebody 2",
//     comment: "XDZXDXDXDXDXDXDXDXDXDXDXD",
//     id: 2,
//   },
//   {
//     name: "name 3",
//     image: require("../../images/graphic1.jpg"),
//     amountOfLikes: 10,
//     commentAuthor: "Somebody 3",
//     comment: "XDZXDXDXDXDXD",
//     id: 3,
//   },
//   {
//     name: "name 4",
//     image: require("../../images/graphic1.jpg"),
//     amountOfLikes: 14,
//     commentAuthor: "Somebody 4",
//     comment: "XDZXDXDXDXDXD",
//     id: 4,
//   },
// ];

const postsData = [
  {
    description: "description 1",
    imgName: "https://picsum.photos/id/237/300/200",
  },
  {
    description: "description 2",
    imgName: "https://picsum.photos/id/238/300/200",
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
  {
    description: "description 9",
    imgName: "https://picsum.photos/id/245/300/200",
  },
  {
    description: "description 10",
    imgName: "https://picsum.photos/id/246/300/200",
  },
  {
    description: "description 11",
    imgName: "https://picsum.photos/id/247/300/200",
  },
];

const getPosts = async () => {
  const response: PostgrestResponse<PostProps> = await supabase
    .from("posts")
    .select("*")
    .is("archived_at", null);

  return response.data;
};

export const DashboardView = () => {
  const { data, isLoading } = useQuery(["posts"], getPosts);

  // const add = async () => {
  //   console.log("jest tuu");

  //   await supabase
  //     .from("comments")
  //     .insert({
  //       body: "komentarz 1",
  //       post_id: 100,
  //     })
  //     .limit(1)
  //     .single();

  //   await supabase
  //     .from("comments")
  //     .insert({
  //       body: "komentarz 2",
  //       post_id: 110,
  //     })
  //     .limit(1)
  //     .single();
  //   await supabase
  //     .from("comments")
  //     .insert({
  //       body: "komentarz 3",
  //       post_id: 120,
  //     })
  //     .limit(1)
  //     .single();
  //   await supabase
  //     .from("comments")
  //     .insert({
  //       body: "komentarz 4",
  //       post_id: 98,
  //     })
  //     .limit(1)
  //     .single();
  // };

  // add();

  // console.log(add());

  const posts = data ?? [];

  return (
    <View style={styles.dashboardContainer}>
      <StoriesList />
      <PostsList data={posts} postDisplayType="show-entire-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    paddingVertical: 15,
  },
});
