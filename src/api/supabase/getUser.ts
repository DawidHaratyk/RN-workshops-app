import { supabase } from "../../../supabase";

export const getUser = async (creator_uuid: string | null) => {
  const userResponse = await supabase
    .from("users")
    .select()
    .eq("uuid", creator_uuid)
    .single();

  return userResponse;
};
