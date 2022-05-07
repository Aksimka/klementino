export type NumString = number | string

export interface Profile {
  userId: number
  name: string
  age: number
  isOnline: boolean
  business: string
  about: string
  interests: string[]
  images: string[]
}
