import { ImageSourcePropType } from "react-native";

type PartiallyOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface PostProps {
  archived_at: string | null;
  created_at: string | null;
  creator_uuid: string;
  description: string | null;
  id: number;
  image_url: string | null;
}

// all fields are required, except of id
export type PostPropsWithOptionalId = PartiallyOptional<PostProps, "id">;

export interface RegisterInputValues {
  email: string;
  password: string;
  confirmedPassword: string;
}

export interface StoryItem {
  image: ImageSourcePropType;
}
