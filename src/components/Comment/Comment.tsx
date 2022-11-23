import {
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityBase,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { UserImageCircle } from "../UserImageCircle/UserImageCircle";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../supabase";
import { Database } from "../../types/database.types";

interface CommentProps {
  body: string | null;
  creator_uuid: string | null;
}

const getUser = async (creator_uuid: string | null) => {
  const userResponse = await supabase
    .from("users")
    .select()
    .eq("uuid", creator_uuid)
    .single();

  return userResponse;
};

export const Comment = ({ body, creator_uuid }: CommentProps) => {
  const navigation = useNavigation();

  const { data, isLoading } = useQuery(["user", creator_uuid], () =>
    getUser(creator_uuid)
  );

  const goToUserProfileScreen = () =>
    navigation.navigate("UserProfile", {
      userId: creator_uuid,
    });

  return (
    <View style={styles.commentContainer}>
      <UserImageCircle
        image={
          "https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg"
        }
        size="small"
        additionalStyles={{ marginRight: 7 }}
      />
      <Text style={styles.authorAndCommentContainer}>
        <TouchableWithoutFeedback onPress={goToUserProfileScreen}>
          <Text>
            {typeof data?.data?.first_name === "string"
              ? data?.data?.first_name
              : "Imię"}
          </Text>
        </TouchableWithoutFeedback>
        <Text>: {body}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  authorAndCommentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
