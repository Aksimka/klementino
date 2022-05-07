import { computed, ComputedRef, Ref, ref } from 'vue'
import { Profile } from '@/types'
import profilesMock from '../helpers/mock/profiles'

interface useProfilesType {
  profiles: Ref<Profile[]>
  prevProfiles: Ref<Profile[]>
  currentProfile: ComputedRef<Profile>
  combineName: (profile: Profile) => string
}

export default (): useProfilesType => {
  const profiles = ref<Profile[]>(profilesMock)
  const prevProfiles = ref<Profile[]>([])

  const currentProfile = computed(() => {
    return profiles.value[0]
  })

  const combineName = (profile: Profile) => {
    return `${profile.name}, ${profile.age}`
  }

  return { profiles, prevProfiles, currentProfile, combineName }
}
