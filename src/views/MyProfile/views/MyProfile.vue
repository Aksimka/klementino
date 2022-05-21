<template>
  <div v-if="profileInfo" ref="sectionWrapper" class="profile">
    <div ref="pictureWrapper" class="profile-picture__wrapper">
      <ProfilePicture
        :name="combineName(profileInfo)"
        :images="profileInfo?.images"
      />
    </div>
    <Container v-if="!editMode" class="profile-actions">
      <RoundButton class="profile-action">
        <SvgIcon
          class="profile-action__icon color_primary"
          name="pencil"
          :size="decreaseButton ? 22 : 34"
          @click="toggleEditMode"
        />
      </RoundButton>
    </Container>
    <Container v-else class="profile-actions confirm-edit">
      <RoundButton class="profile-action">
        <SvgIcon
          class="profile-action__icon color_error"
          name="cross"
          :size="decreaseButton ? 22 : 34"
          @click="cancelChanges"
        />
      </RoundButton>
      <RoundButton class="profile-action ml-4">
        <SvgIcon
          class="profile-action__icon color_favorite"
          name="check"
          :size="decreaseButton ? 22 : 34"
          @click="confirmChanges"
        />
      </RoundButton>
    </Container>
    <Container class="profile-info">
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="2" weight="bold">{{
            combineName(profileInfo)
          }}</Heading>
        </template>
        <Text weight="bold"> {{ profileInfo?.business }} </Text>
      </DescriptionElement>
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="6" weight="800">About</Heading>
        </template>
        <Text weight="bold">
          {{ profileInfo?.about }}
        </Text>
      </DescriptionElement>
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="6" weight="bold">Interests</Heading>
        </template>
        <ChipsGroup>
          <Chip
            v-for="i in profileInfo?.interests"
            :key="i"
            class="profile-info__chip"
          >
            {{ i }}
          </Chip>
        </ChipsGroup>
      </DescriptionElement>
    </Container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Profile } from '@/types'
import useUserStore from '@/store/modules/user'
import useProfile from '@/hooks/useProfile'
import ProfilePicture from '@/blocks/ProfilePicture.vue'
import Text from '@/components/ui/Text/Text.vue'
import Container from '@/components/ui/Container/Container.vue'
import Heading from '@/components/ui/Heading/Heading.vue'
import DescriptionElement from '@/views/ProfileCardsSwiper/components/DescriptionElement.vue'
import Chip from '@/components/ui/Chip/Chip.vue'
import ChipsGroup from '@/components/ui/ChipsGroup/ChipsGroup.vue'
import RoundButton from '@/components/ui/RoundButton/RoundButton.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import useEditMode from '@/views/MyProfile/hooks/useEditMode'

export default defineComponent({
  name: 'Main',
  components: {
    SvgIcon,
    RoundButton,
    ChipsGroup,
    Chip,
    DescriptionElement,
    Heading,
    Container,
    Text,
    ProfilePicture,
  },
  setup() {
    const router = useRouter()
    const currentUserid = Number(router?.currentRoute.value.params.id)

    const userStore = useUserStore()
    const { profileInfo } = userStore

    const { combineName } = useProfile()
    const {
      editMode,
      currentProfileObject,
      toggleEditMode,
      cancelChanges,
      confirmChanges,
    } = useEditMode(profileInfo)

    const decreaseButton = ref<boolean>(false)

    document.addEventListener('scroll', () => {
      decreaseButton.value = window.scrollY > 10
    })

    const sectionWrapper = ref<HTMLDivElement | null>(null)
    const pictureWrapper = ref<HTMLDivElement | null>(null)

    return {
      profileInfo: currentProfileObject,
      editMode,
      decreaseButton,
      sectionWrapper,
      pictureWrapper,
      currentUserid,
      toggleEditMode,
      cancelChanges,
      confirmChanges,
      combineName,
    }
  },
})
</script>

<style scoped lang="scss">
.profile {
  width: calc(100% - 16px);
  margin: 0 auto;
  border-radius: 40px;
  .profile-actions {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    position: fixed;
    bottom: calc(8px + var(--nav-heigth));
    width: 100%;
    .profile-action {
      background-color: var(--color-background-main);
    }
  }
  .confirm-edit {
    justify-content: center;
  }
  .profile-info {
    height: 1500px;
    padding-top: 40px;
    .profile-info__element {
      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }
    .profile-info__chip {
      margin: 8px 0 0 8px;
    }
  }
}
</style>
