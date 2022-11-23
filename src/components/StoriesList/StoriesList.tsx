import { StyleSheet, ScrollView, View, Pressable } from "react-native";
import React from "react";

import { ImageSourcePropType } from "react-native";
import { UserImageCircle } from "../UserImageCircle/UserImageCircle";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase";
import { useNavigation } from "@react-navigation/native";

export interface StoryItem {
  image: ImageSourcePropType;
}

const getUsers = async () => {
  const usersResponse = await supabase.from("users").select("*");

  return usersResponse.data;
};

export const StoriesList = () => {
  const { navigate } = useNavigation();

  const { data, isLoading } = useQuery(["users"], getUsers);

  const goToUserProfile = () => {
    console.log("idziee");

    navigate("UserProfile");
  };

  const storiesList = data?.map(({ image_url, uuid }) => (
    <View style={styles.storyItemContainer} key={uuid}>
      <UserImageCircle
        image={image_url}
        size="medium"
        onPress={goToUserProfile}
      />
    </View>
  ));

  return (
    <View>
      <ScrollView horizontal style={styles.storiesContainer}>
        {storiesList}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    paddingHorizontal: 15,
    height: 80,
    // add bottom box shadow here
  },
  storyItemContainer: {
    marginRight: 9,
  },
});
