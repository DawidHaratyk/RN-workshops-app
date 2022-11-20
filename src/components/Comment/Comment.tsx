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

interface CommentProps {
  image: ImageSourcePropType;
  commentAuthor: string;
  comment: string;
}

export const Comment = ({ image, commentAuthor, comment }: CommentProps) => {
  const navigation = useNavigation();

  const goToUserProfileScreen = () => navigation.navigate("UserProfile");

  return (
    <View style={styles.commentContainer}>
      <UserImageCircle
        image={image}
        size="small"
        additionalStyles={{ marginRight: 7 }}
      />
      <Text style={styles.authorAndCommentContainer}>
        <TouchableWithoutFeedback onPress={goToUserProfileScreen}>
          <Text>{commentAuthor}</Text>
        </TouchableWithoutFeedback>
        <Text>: {comment}</Text>
      </Text>
      {/* improve fontSize on these Texts */}
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
