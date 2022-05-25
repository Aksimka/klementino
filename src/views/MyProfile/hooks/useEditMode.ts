import { ref } from 'vue'
import { Profile } from '@/types'
import { deepCopy } from '@/helpers'

export default (profile: Profile) => {
  const editMode = ref<boolean>(false)
  const backupProfile = ref<Profile>(profile)
  const profileToEdit = ref<Profile | null>(profile)
  const editChipText = ref<string>('')

  // const currentProfileObject = computed<Profile>({
  //   get() {
  //     return editMode.value && profileToEdit.value
  //       ? profileToEdit.value
  //       : backupProfile.value
  //   },
  //   set(val) {
  //     profileToEdit.value = val
  //   },
  // })

  const setEditMode = (val: boolean) => {
    editMode.value = val
  }

  const cancelChanges = () => {
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      profileToEdit.value.interests = interests.filter((i) => i !== val)
    }
  }

  return {
    editMode,
    profileToEdit,
    // currentProfileObject,
    editChipText,
    addInterest,
    removeInterest,
    setEditMode,
    confirmChanges,
    cancelChanges,
  }
}
