import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import { UserImageCircle } from "../UserImageCircle/UserImageCircle";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { getUsers } from "../../api/supabase/getUsers";

export const StoriesList = () => {
  const { navigate } = useNavigation();

  const { data } = useQuery(["users"], getUsers);

  const goToUserProfile = () => navigate("UserProfile");

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
  },
  storyItemContainer: {
    marginRight: 9,
  },
});
