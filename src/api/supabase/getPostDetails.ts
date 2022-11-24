import { supabase } from "../../../supabase";

export const getPostDetails = async (postId: number) => {
  const postDetailsResponse = await supabase
    .from("posts")
    .select(
      "id, created_at, creator_uuid, description, image_url, comments ( body, creator_uuid, id )"
    )
    .eq("id", postId)
    .is("archived_at", null)
    .single();

  const userResponse = await supabase
    .from("users")
    .select()
    .eq("uuid", postDetailsResponse.data?.creator_uuid)
    .single();

  return {
    postDetailsResponse: postDetailsResponse,
    userResponse: userResponse.data,
  };
};
