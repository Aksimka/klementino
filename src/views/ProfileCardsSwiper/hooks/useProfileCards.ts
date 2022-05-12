import { computed, ComputedRef, Ref, ref } from 'vue'
import { Profile } from '@/types'
import profileCardsMock from './../helpers/mock/profileCards'
import useProfile from '@/hooks/useProfile'

interface useProfilesType {
  profiles: Ref<Profile[]>
  prevProfiles: Ref<Profile[]>
  currentProfileIndex: Ref<number>
  currentProfile: ComputedRef<Profile>
  combineName: (profile: Profile) => string
  likeCurrentProfile: () => void
  dislikeCurrentProfile: () => void
  goNextProfile: () => void
}

export default (): useProfilesType => {
  const { likeProfile, dislikeProfile } = useProfile()

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

  const combineName = (profile: Profile) => {
    const nowYear = new Date().getFullYear()
    const userBirthYear = new Date(profile.birthDate).getFullYear()
    const computeAge = nowYear - userBirthYear

    return `${profile.name}, ${computeAge}`
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
    goNextProfile,
    combineName,
    likeCurrentProfile,
    dislikeCurrentProfile,
  }
}
