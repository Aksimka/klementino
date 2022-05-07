<template>
  <div
    ref="sectionWrapper"
    class="profile"
    :class="{ 'fixed-swipe': dragOffset !== 0 }"
  >
    <div class="profiles-swiper">
      <div
        ref="pictureWrapper"
        v-touch:drag="swipeHandler"
        class="profiles-swiper__current-profile"
        :class="{ smooth: !currentTouchEvent, pan: currentTouchEvent }"
        :style="stylesByPosition"
        @touchstart="startSwipe"
        @touchend="endSwipe"
      >
        <ProfilePicture
          :images="currentProfile.images"
          :name="combineName(currentProfile)"
        />
      </div>
      <div
        class="profiles-swiper__prev-profiles"
        :class="{ smooth: !currentTouchEvent }"
        :style="prevStylesByPosition"
      >
        <ProfilePicture
          :images="profiles[1].images"
          :name="combineName(profiles[1])"
        />
      </div>
    </div>
    <Container class="profile-actions">
      <RoundButton
        class="button-dislike profile-action"
        :class="[
          `${swipeSide === 'left' ? 'background_dislike' : 'background_main'}`,
          { active: swipeSide === 'left' },
        ]"
      >
        <SvgIcon
          class="profile-action__icon color_dislike"
          :class="{ color_main: swipeSide === 'left' }"
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
      <RoundButton
        class="button-like profile-action"
        :class="[
          `${swipeSide === 'right' ? 'background_like' : 'background_main'}`,
          { active: swipeSide === 'right' },
        ]"
      >
        <SvgIcon
          class="picture-action__icon color_like"
          :class="{ color_main: swipeSide === 'right' }"
          name="heart"
          :size="decreaseButton ? 22 : 34"
        />
      </RoundButton>
    </Container>
    <Container class="profile-info">
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="2" weight="bold">
            {{ combineName(currentProfile) }}
          </Heading>
        </template>
        <Text weight="bold"> {{ currentProfile.business }} </Text>
      </DescriptionElement>
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="6" weight="800">About</Heading>
        </template>
        <Text weight="bold">
          {{ currentProfile.about }}
        </Text>
      </DescriptionElement>
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="6" weight="bold">Interests</Heading>
        </template>
        <ChipsGroup>
          <Chip
            v-for="i in currentProfile.interests"
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
import { defineComponent, reactive, toRefs, ref } from 'vue'
import ProfilePicture from '@/views/Profile/blocks/ProfilePicture.vue'
import Text from '@/components/ui/Text/Text.vue'
import Container from '@/components/ui/Container/Container.vue'
import Heading from '@/components/ui/Heading/Heading.vue'
import DescriptionElement from '@/views/Profile/components/DescriptionElement.vue'
import Chip from '@/components/ui/Chip/Chip.vue'
import ChipsGroup from '@/components/ui/ChipsGroup/ChipsGroup.vue'
import RoundButton from '@/components/ui/RoundButton/RoundButton.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import useSwipe from '../hooks/useSwipe'
import useProfiles from '../hooks/useProfiles'

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
    const state = reactive({
      inputValue: null,
      decreaseButton: false,
    })

    const {
      currentTouchEvent,
      swipeSide,
      stylesByPosition,
      prevStylesByPosition,
      dragOffset,
      swipeHandler,
      startSwipe,
      endSwipe,
    } = useSwipe()

    const { currentProfile, combineName, profiles } = useProfiles()

    document.addEventListener('scroll', () => {
      state.decreaseButton = window.scrollY > 10
    })

    const sectionWrapper = ref<HTMLDivElement | null>(null)
    const pictureWrapper = ref<HTMLDivElement | null>(null)

    return {
      ...toRefs(state),
      sectionWrapper,
      pictureWrapper,
      stylesByPosition,
      prevStylesByPosition,
      currentTouchEvent,
      swipeSide,
      dragOffset,
      swipeHandler,
      startSwipe,
      endSwipe,

      profiles,
      currentProfile,
      combineName,
    }
  },
})
</script>

<style lang="scss">
.profile {
  width: calc(100% - 16px);
  margin: 0 auto;
  border-radius: 40px;
  overflow: hidden;
  .profiles-swiper__current-profile {
    position: relative;
    z-index: 2;
  }
  .profiles-swiper__prev-profiles {
    width: calc(100% - 16px);
    margin: 0 auto;
    position: absolute;
    z-index: 1;
    top: var(--header-heigth);
    left: 8px;
    transform: scale(0.9);
    opacity: 0.7;
  }
  .prepare-action {
    transform: scale(0.7);
  }
  .profile-actions {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    position: fixed;
    bottom: calc(8px + var(--nav-heigth));
    width: 100%;
    z-index: 5;
  }
  .profile-action {
    transition: 0.3s;
  }
  .profile-action.active {
    transform: scale(1.2);
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
.fixed-swipe {
  touch-action: pan-x;
}
.smooth {
  transition: 0.3s;
  transition-timing-function: ease-out;
}
</style>
