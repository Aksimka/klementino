export type NumString = number | string

export interface Profile {
  userId: number
  name: string
  birthDate: string
  isOnline: boolean
  business: string
  about: string
  interests: string[]
  images: string[]
}
