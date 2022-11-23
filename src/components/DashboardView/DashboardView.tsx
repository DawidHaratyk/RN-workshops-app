import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { PostsList } from "../PostsList/PostsList";
import { PostProps } from "../../types";
import { StoriesList } from "../StoriesList/StoriesList";
import { supabase } from "../../../supabase";
import { useQuery } from "@tanstack/react-query";
import { PostgrestResponse } from "@supabase/supabase-js";

const getPosts = async () => {
  const response = await supabase
    .from("posts")
    .select("*")
    .is("archived_at", null);

  return response.data;
};

export const DashboardView = () => {
  const { data, isLoading } = useQuery(["posts"], getPosts);

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
    paddingBottom: 240,
  },
});
