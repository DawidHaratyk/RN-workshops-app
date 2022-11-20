import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Comment } from "../Comment/Comment";

const commentsData = [
  {
    image: require("../../images/graphic1.jpg"),
    commentAuthor: "Agent Bao Bao",
    comment: "XDDDDDSSDDD",
  },
  {
    image: require("../../images/graphic1.jpg"),
    commentAuthor: "Agent Bao Bao",
    comment: "XDDDDDDDDsssss",
  },
  {
    image: require("../../images/graphic1.jpg"),
    commentAuthor: "Agent Bao Bao",
    comment: "XDDDDDDDD",
  },
  {
    image: require("../../images/graphic1.jpg"),
    commentAuthor: "Agent Bao Bao",
    comment: "XDDDDDDDD",
  },
  {
    image: require("../../images/graphic1.jpg"),
    commentAuthor: "Agent Bao Bao",
    comment: "XDDDDDDDD",
  },
  {
    image: require("../../images/graphic1.jpg"),
    commentAuthor: "Agent Bao Bao",
    comment: "XDDDDDDDD",
  },
  {
    image: require("../../images/graphic1.jpg"),
    commentAuthor: "Agent Bao Bao",
    comment: "XDDDDDDDD",
  },
  {
    image: require("../../images/graphic1.jpg"),
    commentAuthor: "Agent Bao Bao",
    comment: "XDDDDDDDD",
  },
  {
    image: require("../../images/graphic1.jpg"),
    commentAuthor: "Agent Bao Bao",
    comment: "XDDDDDDDD",
  },
];

export const PostCommentsList = () => {
  const commentsList = commentsData.map((commentObj) => (
    <Comment {...commentObj} />
  ));

  // fix the comments, they should be displayed above Bottom Tab Navigation

  return (
    <ScrollView style={styles.commentsListContainer}>{commentsList}</ScrollView>
  );
};

const styles = StyleSheet.create({
  commentsListContainer: {
    // minHeight: 100,
    // maxHeight: 300,
    // how to make it grow by height here
  },
});
