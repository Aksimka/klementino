import { computed, ref } from 'vue'
import { Profile } from '@/types'

export default (profile: Profile) => {
  const editMode = ref<boolean>(false)
  const profileToEdit = ref<Profile | null>(null)

  const currentProfileObject = computed(() =>
    editMode.value ? profileToEdit.value : profile
  )

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

  return {
    editMode,
    profileToEdit,
    currentProfileObject,
    toggleEditMode,
    confirmChanges,
    cancelChanges,
  }
}
