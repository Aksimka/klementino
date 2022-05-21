<template>
  <div v-if="currentProfile" ref="sectionWrapper" class="profile">
    <div ref="pictureWrapper" class="profile-picture__wrapper">
      <ProfilePicture
        :name="combineName(currentProfile)"
        :images="currentProfile?.images"
      />
    </div>
    <Container class="profile-actions">
      <RoundButton
        class="button-dislike profile-action"
        @click="dislikeProfile"
      >
        <SvgIcon
          class="profile-action__icon color_dislike"
          name="cross"
          :size="decreaseButton ? 22 : 34"
        />
      </RoundButton>
      <RoundButton class="profile-action background_main">
        <SvgIcon
          class="picture-action__icon color_favorite"
          :size="decreaseButton ? 22 : 34"
          name="star"
        />
      </RoundButton>
      <RoundButton class="button-like profile-action" @click="likeProfile">
        <SvgIcon
          class="picture-action__icon color_like"
          name="heart"
          :size="decreaseButton ? 22 : 34"
        />
      </RoundButton>
    </Container>
    <Container class="profile-info">
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="2" weight="bold">{{
            combineName(currentProfile)
          }}</Heading>
        </template>
        <Text weight="bold"> {{ currentProfile?.business }} </Text>
      </DescriptionElement>
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="6" weight="800">About</Heading>
        </template>
        <Text weight="bold">
          {{ currentProfile?.about }}
        </Text>
      </DescriptionElement>
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="6" weight="bold">Interests</Heading>
        </template>
        <ChipsGroup>
          <Chip
            v-for="i in currentProfile?.interests"
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
import { defineComponent, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { Profile } from '@/types'
import useUserStore from '@/store/modules/user'
import useProfile from '@/hooks/useProfile'
import useProfileRequest from './../hooks/useProfileRequest'
import ProfilePicture from '@/blocks/ProfilePicture.vue'
import Text from '@/components/ui/Text/Text.vue'
import Container from '@/components/ui/Container/Container.vue'
import Heading from '@/components/ui/Heading/Heading.vue'
import DescriptionElement from '@/views/ProfileCardsSwiper/components/DescriptionElement.vue'
import Chip from '@/components/ui/Chip/Chip.vue'
import ChipsGroup from '@/components/ui/ChipsGroup/ChipsGroup.vue'
import RoundButton from '@/components/ui/RoundButton/RoundButton.vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  name: 'Main',
  components: {
    ChipsGroup,
    Chip,
    DescriptionElement,
    Heading,
    Container,
    Text,
    ProfilePicture,
    RoundButton,
    SvgIcon,
  },
  setup() {
    const router = useRouter()
    const currentUserid = Number(router?.currentRoute.value.params.id)

    const userStore = useUserStore()
    const { profileInfo } = storeToRefs(userStore)

    const { getProfileById } = useProfileRequest()
    const { likeProfile, dislikeProfile, combineName } = useProfile()

    const decreaseButton = ref<boolean>(false)
    let currentProfile = ref<Profile | null>(null)

    onMounted(async () => {
      currentProfile.value = await getProfileById(currentUserid)
    })

    document.addEventListener('scroll', () => {
      decreaseButton.value = window.scrollY > 10
    })

    const sectionWrapper = ref<HTMLDivElement | null>(null)
    const pictureWrapper = ref<HTMLDivElement | null>(null)

    return {
      decreaseButton,
      sectionWrapper,
      pictureWrapper,
      currentUserid,
      currentProfile,
      profileInfo,
      combineName,
      likeProfile,
      dislikeProfile,
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
