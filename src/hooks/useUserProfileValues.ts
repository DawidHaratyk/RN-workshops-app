import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/supabase/getPosts";
import { getUser } from "../api/supabase/getUser";

export const useUserProfileValues = (userUuid: string) => {
  const { data, isLoading } = useQuery(["posts"], getPosts);
  const userQuery = useQuery(["user", userUuid], () => getUser(userUuid));

  const userData = userQuery?.data?.data;

  const name = userData?.first_name ? userData?.first_name : "Name";
  const surname = userData?.last_name ? userData?.last_name : "Surname";

  const imageUrl = userData?.image_url
    ? userData?.image_url
    : "https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg";

  const posts = data ?? [];

  return { posts, name, surname, imageUrl };
};
