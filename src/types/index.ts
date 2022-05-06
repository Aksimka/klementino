export type NumString = number | string

interface Profile {
  userId: number
  name: string
  age: number
  isOnline: boolean
  business: string
  about: string
  interests: string[]
  images: string[]
}
