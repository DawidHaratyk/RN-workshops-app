import { supabase } from "../../../supabase";

export const getPosts = async () => {
  const response = await supabase
    .from("posts")
    .select("*")
    .is("archived_at", null);

  return response.data;
};
