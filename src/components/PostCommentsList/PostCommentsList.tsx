import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Comment } from "../Comment/Comment";
import { Database } from "../../types/database.types";

interface PostCommentsListProps {
  commentsList: any;
}

export const PostCommentsList = ({ commentsList }: PostCommentsListProps) => {
  console.log(commentsList);

  const allCommentsList = commentsList.map(
    ({ body, creator_uuid, id }: any) => (
      <Comment body={body} creator_uuid={creator_uuid} key={id} />
    )
  );

  // fix the comments, they should be displayed above Bottom Tab Navigation

  return (
    <ScrollView style={styles.commentsListContainer}>
      {allCommentsList}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  commentsListContainer: {
    // minHeight: 100,
    // maxHeight: 300,
    // how to make it grow by height here
  },
});
