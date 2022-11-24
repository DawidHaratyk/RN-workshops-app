import { supabase } from "../../../supabase";

export const getPostData = async (postId: number, creator_uuid: string) => {
  const [likesResponse, userPostCreatorResponse, commentsResponse] =
    await Promise.all([
      supabase
        .from("likes")
        .select("*", { count: "exact" })
        .eq("post_id", postId),
      supabase.from("users").select().eq("uuid", creator_uuid).single(),
      supabase
        .from("comments")
        .select("*", { count: "exact" })
        .eq("post_id", postId),
    ]);

  const commentAuthorResponse = await supabase
    .from("users")
    .select()
    .eq(
      "uuid",
      commentsResponse?.data?.length && commentsResponse.data[0].creator_uuid
    )
    .single();

  const name =
    typeof userPostCreatorResponse.data?.first_name === "string"
      ? userPostCreatorResponse.data?.first_name
      : "Imie";

  const surname =
    typeof userPostCreatorResponse.data?.last_name === "string"
      ? userPostCreatorResponse.data?.last_name
      : "Nazwisko";

  return {
    likes: likesResponse.count,
    postAuthor: `${name} ${surname}`,
    comments: commentsResponse.data,
    lastCommentAuthor: `${commentAuthorResponse.data?.first_name} ${commentAuthorResponse.data?.last_name}`,
  };
};
