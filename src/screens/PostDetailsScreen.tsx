import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserImageCircle } from "../components/UserImageCircle/UserImageCircle";
import { Body } from "../components/Typography/Body/Body";
import { PostInformations } from "../components/PostInformations/PostInformations";
import { PostCommentsList } from "../components/PostCommentsList/PostCommentsList";
import { InputWithSubmitOption } from "../components/InputWithSubmitOption/InputWithSubmitOption";
import { windowHeight } from "../constants";
import { usePostDetailsValues } from "../hooks/usePostDetailsValues";

export const PostDetailsScreen = ({ navigation, route }: any) => {
  const postId: number = route.params.postId;

  const { imgUrl, name, amountOfLikes, comment, commentsList } =
    usePostDetailsValues(postId);

  // why navigation.goBack() is not going back to userProfile when that was our last route

  // if (isLoading)
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <Header title="Loading" variant="h3" />
  //     </View>
  //   );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.postDetailsContainer}>
            <Image
              source={{
                uri: imgUrl,
              }}
              style={styles.postDetailsImage}
            />
            <View style={styles.postDetailsContent}>
              <View style={styles.postDetailsImageContainer}>
                <UserImageCircle
                  image="https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg"
                  size="medium"
                />
                <Body title={name} variant="small" />
              </View>
              <View>
                <PostInformations
                  amountOfLikes={amountOfLikes}
                  commentAuthor="Title"
                  comment={comment}
                />
              </View>
            </View>
            {commentsList && <PostCommentsList commentsList={commentsList} />}
            <View style={styles.postInputContainer}>
              {/* first seconds the input is in the wrong place, fix that */}
              <InputWithSubmitOption
                value=""
                onChangeText={() => null}
                placeholder="comment"
              />
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight,
  },
});
