import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserImageCircle } from "../components/UserImageCircle/UserImageCircle";
import { Body } from "../components/Typography/Body/Body";
import { PostInformations } from "../components/PostInformations/PostInformations";
import { PostCommentsList } from "../components/PostCommentsList/PostCommentsList";
import { InputWithSubmitOption } from "../components/InputWithSubmitOption/InputWithSubmitOption";
import { windowHeight } from "../constants";
import { supabase } from "../../supabase";
import { useQuery } from "@tanstack/react-query";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Header } from "../components/Typography/Header/Header";

export interface Comment {
  body: string;
  creator_uuid: string;
  id: number;
}

export interface PostDetails {
  id: number;
  created_at: Date;
  description: string;
  image_url: string;
  comments: Comment[];
}

export interface PostData {
  error?: any;
  data: PostDetails;
  count?: any;
  status: number;
  statusText: string;
}

const getPostDetails = async (postId: number) => {
  // what type for the response? why PostData is not working

  const response = await supabase
    .from("posts")
    .select(
      "id, created_at, description, image_url, comments ( body, creator_uuid, id )"
    )
    .eq("id", postId)
    .is("archived_at", null)
    .single();

  return response;
};

export const PostDetailsScreen = ({ route }: any) => {
  const postId: number = route.params.postId;

  const { data, isLoading } = useQuery(["post", postId], () =>
    getPostDetails(postId)
  );

  if (isLoading) return <Header title="Loding..." variant="h4" />;

  const imgUrl: string = data?.data?.image_url;

  return (
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
