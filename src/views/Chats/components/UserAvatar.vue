<template>
  <div class="user-avatar">
    <span class="online-flag" :class="{ online: online }"></span>
    <div class="display-center">
      <Suspense>
        <RoundImage :img="image" />
        <template #fallback>loading</template>
      </Suspense>
    </div>
    <Text weight="500" :size="14" class="text-center one-ellipsis mt-4">
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
  },
})
</script>

<style scoped lang="scss">
.user-avatar {
  display: flex;
  flex-direction: column;
  position: relative;
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
</style>
