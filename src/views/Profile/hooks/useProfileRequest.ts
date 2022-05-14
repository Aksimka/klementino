import profiles from '@/mocks/profiles'
import { Profile } from '@/types'

export default () => {
  const getAllProfiles = async () => {
    return new Promise<Profile[]>(() => {
      return profiles
    })
  }

  const getProfileById = async (id: number) => {
    return new Promise<Profile | null>((resolve, reject) => {
      const found = profiles.find((i) => i.userId === id)
      if (found) {
        resolve(found)
      } else {
        reject(null)
      }
    })
  }

  return { getAllProfiles, getProfileById }
}
