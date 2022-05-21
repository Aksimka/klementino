<template>
  <div class="profile" :class="{ 'fixed-swipe': dragOffset !== 0 }">
    <div class="profiles-swiper">
      <div
        v-touch:drag="swipeHandler"
        class="profiles-swiper__current-profile swiper-size-limit"
        :class="{
          smooth: !swipeStates.isSwiping && swipeStates.isEnds,
          pan: swipeStates.isSwiping,
        }"
        :style="stylesByPosition"
        @touchstart="startSwipe"
        @touchend="endSwipeChoice(swipeSide)"
      >
        <ProfilePicture
          :images="currentProfile.images"
          :name="combineName(currentProfile)"
        />
      </div>
      <div
        v-if="nextProfileBySwipeState"
        class="profiles-swiper__next-profiles"
        :class="{ smooth: !swipeStates.isSwiping }"
        :style="prevStylesByPosition"
      >
        <div class="swiper-size-limit">
          <ProfilePicture
            :images="nextProfileBySwipeState.images"
            :name="combineName(nextProfileBySwipeState)"
          />
        </div>
      </div>
    </div>
    <Container class="profile-actions">
      <RoundButton
        class="button-dislike profile-action"
        :class="[
          `${swipeSide === 'left' ? 'background_dislike' : 'background_main'}`,
          { active: swipeSide === 'left' },
        ]"
        @click="makeChoice('dislike')"
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
        @click="makeChoice('like')"
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
import { computed, defineComponent } from 'vue'
import ProfilePicture from '@/blocks/ProfilePicture.vue'
import Text from '@/components/ui/Text/Text.vue'
import Container from '@/components/ui/Container/Container.vue'
import Heading from '@/components/ui/Heading/Heading.vue'
import DescriptionElement from '@/views/ProfileCardsSwiper/components/DescriptionElement.vue'
import Chip from '@/components/ui/Chip/Chip.vue'
import ChipsGroup from '@/components/ui/ChipsGroup/ChipsGroup.vue'
import RoundButton from '@/components/ui/RoundButton/RoundButton.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import useSwipe, { SwipeSides } from '../hooks/useSwipe'
import useProfileCards from '../hooks/useProfileCards'
import useDecreaseButton from '@/hooks/useDecreaseButton'

type Choices = 'like' | 'dislike'

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
    const {
      currentTouchEvent,
      swipeSide,
      stylesByPosition,
      prevStylesByPosition,
      dragOffset,
      swipeHandler,
      startSwipe,
      swipeStates,
      endSwipe,
    } = useSwipe()

    const {
      currentProfile,
      currentProfileIndex,
      combineName,
      profiles,
      likeCurrentProfile,
      dislikeCurrentProfile,
    } = useProfileCards()

    const { decreaseButton } = useDecreaseButton()

    const nextProfileBySwipeState = computed(() => {
      return profiles.value[1]
    })

    const makeChoice = (choice: Choices | undefined) => {
      switch (choice) {
        case 'like':
          likeCurrentProfile()
          break
        case 'dislike':
          dislikeCurrentProfile()
          break
        default:
          return
      }
    }

    const sideToActionAdapter = (side: SwipeSides) => {
      switch (side) {
        case 'left':
          return 'dislike'
        case 'right':
          return 'like'
        default:
          return
      }
    }

    const endSwipeChoice = (side: SwipeSides) => {
      const onLeaveEnd = () => {
        const adaptAction = sideToActionAdapter(side)
        makeChoice(adaptAction)
      }
      endSwipe({ leaveCallback: onLeaveEnd })
    }

    return {
      decreaseButton,
      stylesByPosition,
      prevStylesByPosition,
      currentTouchEvent,
      swipeSide,
      swipeStates,
      dragOffset,
      swipeHandler,
      startSwipe,
      endSwipe,

      profiles,
      currentProfile,
      currentProfileIndex,
      combineName,

      makeChoice,
      endSwipeChoice,

      nextProfileBySwipeState,
    }
  },
})
</script>

<style scoped lang="scss">
.profile {
  padding: 0 8px;
  overflow-x: hidden;
  .profiles-swiper__current-profile {
    position: relative;
    z-index: 2;
  }
  .profiles-swiper__next-profiles {
    max-width: calc(100% - 16px);
    margin: 0 auto;
    position: absolute;
    z-index: 1;
    top: var(--header-heigth);
    left: 8px;
    transform: scale(0.9);
    opacity: 0.7;
  }
  .swiper-size-limit {
    max-width: 575px;
    margin: 0 auto;
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
