import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserImageCircle } from "../components/UserImageCircle/UserImageCircle";
import { Body } from "../components/Typography/Body/Body";
import { PostInformations } from "../components/PostInformations/PostInformations";
import { PostCommentsList } from "../components/PostCommentsList/PostCommentsList";
import { InputWithSubmitOption } from "../components/InputWithSubmitOption/InputWithSubmitOption";
import { windowHeight } from "../constants";

export const PostDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.postDetailsContainer}>
      <Image
        source={require("../images/graphic1.jpg")}
        style={styles.postDetailsImage}
      />
      <View style={styles.postDetailsContent}>
        <View style={styles.postDetailsImageContainer}>
          <UserImageCircle
            image={require("../images/graphic1.jpg")}
            size="medium"
          />
          <Body title="somebody" variant="small" />
        </View>
        <View>
          <PostInformations
            amountOfLikes={20}
            commentAuthor="Janek"
            comment="hehe uwaga komentarz XDDDDDDDDDD"
          />
        </View>
      </View>
      <PostCommentsList />
      <View style={styles.postInputContainer}>
        <InputWithSubmitOption
          value=""
          onChangeText={() => null}
          placeholder="comment"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postDetailsContainer: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    height: windowHeight,
  },
  postDetailsImage: {
    width: "100%",
    height: "35%",
  },
  postDetailsContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  postDetailsImageContainer: {
    marginRight: 10,
  },
  postInputContainer: {
    alignItems: "center",
    marginTop: 15,
  },
});
