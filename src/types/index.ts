import { ImageSourcePropType } from 'react-native'

type PartiallyOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export interface PostProps {
  name: string
  image: ImageSourcePropType
  amountOfLikes: number
  commentAuthor: string
  comment: string
  id: number
}

// all fields are required, except of id
export type PostPropsWithOptionalId = PartiallyOptional<PostProps, 'id'>

export interface RegisterInputValues {
  email: string
  password: string
  confirmedPassword: string
}
