import { computed, ref } from 'vue'
import { Profile } from '@/types'

export default (profile: Profile) => {
  const editMode = ref<boolean>(false)
  const savedProfile = profile
  const profileToEdit = ref<Profile | null>(null)
  const editChipText = ref<string>('')

  const currentProfileObject = computed<Profile>(() => {
    return editMode.value && profileToEdit.value
      ? profileToEdit.value
      : savedProfile
  })

  const toggleEditMode = () => {
    editMode.value = !editMode.value
    if (editMode.value) {
      profileToEdit.value = profile
    } else {
      profileToEdit.value = null
    }
  }

  const cancelChanges = () => {
    toggleEditMode()
  }

  const confirmChanges = (newProfile: Profile) => {
    const newProfileData = { ...newProfile }
    toggleEditMode()

    return newProfileData
  }

  const addInterest = (val: string): void => {
    profileToEdit.value?.interests.push(val)
    editChipText.value = ''
  }

  const removeInterest = (val: string): void => {
    const interests = profileToEdit.value?.interests
    if (interests) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      profileToEdit.value.interests = interests.filter((i) => i !== val)
    }
  }

  return {
    editMode,
    profileToEdit,
    currentProfileObject,
    editChipText,
    addInterest,
    removeInterest,
    toggleEditMode,
    confirmChanges,
    cancelChanges,
  }
}
