import { computed, ComputedRef, Ref, ref } from 'vue'
import { Profile } from '@/types'
import profilesMock from '../helpers/mock/profiles'

interface useProfilesType {
  profiles: Ref<Profile[]>
  prevProfiles: Ref<Profile[]>
  currentProfile: ComputedRef<Profile>
  combineName: ComputedRef<string>
}

export default (): useProfilesType => {
  const profiles = ref<Profile[]>(profilesMock)
  const prevProfiles = ref<Profile[]>([])

  const currentProfile = computed(() => {
    return profiles.value[0]
  })

  const combineName = computed(() => {
    return `${currentProfile.value.name}, ${currentProfile.value.age}`
  })

  return { profiles, prevProfiles, currentProfile, combineName }
}
