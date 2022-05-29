import { ref } from 'vue'
import { Profile } from '@/types'
import { deepCopy } from '@/helpers'

export default (profile: Profile) => {
  const editMode = ref<boolean>(false)
  const profileToEdit = ref<Profile>(profile)
  const editChipText = ref<string>('')

  const setEditMode = (val: boolean) => {
    editMode.value = val
  }

  const cancelChanges = () => {
    profileToEdit.value = deepCopy<Profile>(profile)
    setEditMode(false)
  }

  const confirmChanges = (newProfile: Profile) => {
    const newProfileData = { ...newProfile }
    setEditMode(false)
    return newProfileData
  }

  const addInterest = (val: string): void => {
    profileToEdit.value?.interests.push(val)
    editChipText.value = ''
  }

  const removeInterest = (val: string): void => {
    const interests = profileToEdit.value?.interests
    if (interests) {
      profileToEdit.value.interests = interests.filter((i) => i !== val)
    }
  }

  return {
    editMode,
    profileToEdit,
    editChipText,
    addInterest,
    removeInterest,
    setEditMode,
    confirmChanges,
    cancelChanges,
  }
}
