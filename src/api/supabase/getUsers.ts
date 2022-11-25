import { supabase } from "../../../supabase";

export const getUsers = async () => {
  const usersResponse = await supabase.from("users").select();

  return usersResponse.data;
};
