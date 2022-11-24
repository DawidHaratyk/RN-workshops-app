import { ScrollView } from "react-native";
import React from "react";
import { Comment } from "../Comment/Comment";

interface PostCommentsListProps {
  commentsList: any;
}

export const PostCommentsList = ({ commentsList }: PostCommentsListProps) => {
  const allCommentsList = commentsList.map(
    ({ body, creator_uuid, id }: any) => (
      <Comment body={body} creator_uuid={creator_uuid} key={id} />
    )
  );

  // how to make ScrollView work (it's in another ScrollView)
  return <ScrollView>{allCommentsList}</ScrollView>;
};
