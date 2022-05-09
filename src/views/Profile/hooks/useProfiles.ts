import { computed, ComputedRef, Ref, ref } from 'vue'
import { Profile } from '@/types'
import profilesMock from '../helpers/mock/profiles'

interface useProfilesType {
  profiles: Ref<Profile[]>
  prevProfiles: Ref<Profile[]>
  currentProfileIndex: Ref<number>
  currentProfile: ComputedRef<Profile>
  combineName: (profile: Profile) => string
  likeCurrentProfile: () => void
  dislikeCurrentProfile: () => void
  nextProfile: () => void
}

export default (): useProfilesType => {
  const profiles = ref<Profile[]>(profilesMock)
  const prevProfiles = ref<Profile[]>([])
  const currentProfileIndex = ref<number>(0)

  const currentProfile = computed(() => {
    return profiles.value[currentProfileIndex.value]
  })

  const nextProfile = () => {
    const profile = profiles.value.splice(0, 1)
    console.log(profile, profiles, 'profiles')
    if (profile?.length) {
      prevProfiles.value.push(...profile)
    }
  }

  const combineName = (profile: Profile) => {
    return `${profile.name}, ${profile.age}`
  }

  const likeCurrentProfile = () => {
    console.log('like')
    nextProfile()
  }

  const dislikeCurrentProfile = () => {
    console.log('dislike')
    nextProfile()
  }

  return {
    profiles,
    prevProfiles,
    currentProfileIndex,
    currentProfile,
    nextProfile,
    combineName,
    likeCurrentProfile,
    dislikeCurrentProfile,
  }
}
