<template>
  <div class="user-avatar">
    <span class="online-flag" :class="{ online: online }"></span>
    <div class="user-avatar__image display-center">
      <div class="accent__border" :class="{ active: accent }"></div>
      <RoundImage size="80px" :img="image" />
      <div class="user-avatar__tags">
        <slot name="tags"></slot>
      </div>
    </div>
    <Text weight="500" :size="14" class="text-center one-ellipsis mt-1">
      {{ name }}
    </Text>
  </div>
</template>

<script>
import RoundImage from '@/components/ui/RoundImage/RoundImage'
import Text from '@/components/ui/Text/Text'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserAvatar',
  components: { Text, RoundImage },
  props: {
    online: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'No name',
    },
    image: {
      type: String,
      default: undefined,
    },
    accent: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped lang="scss">
.user-avatar {
  display: flex;
  flex-direction: column;
  position: relative;
  .user-avatar__image {
    position: relative;
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
