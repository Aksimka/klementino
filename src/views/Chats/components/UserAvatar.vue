<template>
  <div class="user-avatar">
    <div class="user-avatar__image-wrapper relative">
      <div class="accent__border" :class="{ active: accent }"></div>
      <div class="relative full-size rounded">
        <span class="online-flag" :class="{ online: online }"></span>
        <span v-if="accent" class="badge-wrapper">
          <Badge icon="heart" text="5" />
        </span>
        <TransitionGroup
          class="user-avatar__images full-size relative"
          tag="div"
          mode="out-in"
          name="swipe"
        >
          <template v-for="img in images" :key="img">
            <img
              v-show="img === images[currentImageIndex]"
              class="user-avatar__image"
              :src="require(`@/assets/${img}`)"
              alt="avatar"
            />
          </template>
        </TransitionGroup>
      </div>
      <div class="user-avatar__tags">
        <slot name="tags"></slot>
      </div>
    </div>
    <Text
      :weight="!accent ? '500' : '600'"
      :size="14"
      class="text-center one-ellipsis mt-1"
    >
      {{ name }}
    </Text>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, toRefs } from 'vue'
import Text from '@/components/ui/Text/Text.vue'
import Badge from '@/components/ui/Badge/Badge.vue'

export default defineComponent({
  name: 'UserAvatar',
  components: { Badge, Text },
  props: {
    online: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'No name',
    },
    images: {
      type: Array,
      default: () => ['images/no-img.jpg'],
    },
    accent: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { images } = toRefs(props)
    let currentImageIndex = ref(0)
    const intervalFunc = () => {
      if (currentImageIndex.value >= images.value?.length - 1) {
        currentImageIndex.value = 0
      } else {
        currentImageIndex.value += 1
      }
    }
    onMounted(() => {
      if (images.value?.length > 1) {
        setInterval(intervalFunc, 2000)
      }
    })

    return { currentImageIndex }
  },
})
</script>

<style scoped lang="scss">
.user-avatar {
  display: flex;
  flex-direction: column;
  position: relative;
  .user-avatar__image-wrapper {
    height: 84px;
    width: 84px;
  }
  .user-avatar__images {
    overflow: hidden;
    border-radius: 50%;
  }
  .user-avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .badge-wrapper {
    position: absolute;
    z-index: 3;
    bottom: 4px;
    right: 0;
  }
  .online-flag {
    position: absolute;
    right: 4px;
    top: 4px;
    z-index: 2;
    display: none;
  }
  .online-flag.online {
    display: block;
  }
}
.accent__border {
  display: none;
  position: absolute;
  top: -4px;
  left: -4px;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  border-radius: 50%;
  animation-name: test;
  animation-timing-function: linear;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

.accent__border.active {
  display: block;
}

.swipe-enter-active,
.swipe-leave-active {
  transition: 0.5s ease;
}

.swipe-enter-from {
  transform: translateX(84px);
}
.swipe-leave-to {
  transform: translateX(-84px);
}

@keyframes test {
  0% {
    border: 1px solid var(--color-primary-faded);
  }
  50% {
    border: 1px solid var(--color-primary);
  }
  100% {
    border: 1px solid var(--color-primary-faded);
  }
}
</style>
