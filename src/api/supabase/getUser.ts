import { supabase } from "../../../supabase";

export const getUser = async (creator_uuid: string | null) => {
  console.log(creator_uuid);

  const userResponse = await supabase
    .from("users")
    .select()
    .eq("uuid", creator_uuid)
    .single();

  return userResponse;
};
