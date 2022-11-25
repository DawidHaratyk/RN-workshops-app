import { useQuery } from "@tanstack/react-query";
import { getPostDetails } from "../api/supabase/getPostDetails";

export const usePostDetailsValues = (postId: number) => {
  const { data } = useQuery(["postDetails", postId], () =>
    getPostDetails(postId)
  );

  const imgUrl = data?.postDetailsResponse?.data?.image_url
    ? data?.postDetailsResponse?.data?.image_url
    : "https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg";

  const name = data?.userResponse?.first_name
    ? data?.userResponse?.first_name
    : "Noname";

  console.log(data?.postDetailsResponse);

  const amountOfLikes = data?.likesResponse ? data?.likesResponse : 0;

  const comment = data?.postDetailsResponse?.data?.description;

  const commentsList = data?.postDetailsResponse?.data?.comments;

  return { imgUrl, name, amountOfLikes, comment, commentsList };
};
