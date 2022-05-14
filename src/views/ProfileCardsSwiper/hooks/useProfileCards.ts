import { computed, ref } from 'vue'
import { Profile } from '@/types'
import profileCardsMock from './../helpers/mock/profileCards'
import useProfile from '@/hooks/useProfile'

export default () => {
  const { likeProfile, dislikeProfile, combineName } = useProfile()

  const profiles = ref<Profile[]>(profileCardsMock)
  const prevProfiles = ref<Profile[]>([])
  const currentProfileIndex = ref<number>(0)

  const currentProfile = computed<Profile>(() => {
    return profiles.value[currentProfileIndex.value]
  })

  const goNextProfile = () => {
    const profile = profiles.value.splice(0, 1)
    console.log(profile, profiles, 'profiles')
    if (profile?.length) {
      prevProfiles.value.push(...profile)
    }
  }

  const likeCurrentProfile = () => {
    likeProfile(currentProfile.value.userId)
    goNextProfile()
  }

  const dislikeCurrentProfile = () => {
    dislikeProfile(currentProfile.value.userId)
    goNextProfile()
  }

  return {
    profiles,
    prevProfiles,
    currentProfileIndex,
    currentProfile,
    combineName,
    goNextProfile,
    likeCurrentProfile,
    dislikeCurrentProfile,
  }
}
