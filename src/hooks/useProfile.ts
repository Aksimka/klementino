import { Profile } from '@/types'

export default () => {
  const combineName = (profile: Profile) => {
    const nowYear = new Date().getFullYear()
    const userBirthYear = new Date(profile.birthDate).getFullYear()
    const computeAge = nowYear - userBirthYear

    return `${profile.name}, ${computeAge}`
  }

  const likeProfile = (profileId: number) => {
    console.log('like' + profileId + ' profile')
  }

  const dislikeProfile = (profileId: number) => {
    console.log('dislike' + profileId + ' profile')
  }

  return { likeProfile, dislikeProfile, combineName }
}
