<template>
  <div class="users-list-item">
    <div class="users-list-item__avatar">
      <CircleImage :img="image" />
    </div>
    <div class="users-list-item__content ml-3 py-4">
      <div class="d-flex">
        <Heading type="6" weight="bold">
          <span>{{ name }}</span>
        </Heading>
        <span class="online-flag ml-1" :class="{ online }"></span>
      </div>
      <Text class="users-list-item__last-message mt-1" weight="300" :size="16">
        {{ text }}
      </Text>
    </div>
  </div>
</template>

<script>
import CircleImage from '../../../components/ui/CircleImage/CircleImage'
import Heading from '@/components/ui/Heading/Heading'
import Text from '@/components/ui/Text/Text'
export default {
  name: 'UsersListItem',
  components: { Text, Heading, CircleImage },
  props: {
    text: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'No name',
    },
    image: {
      type: String,
      default: 'images/dg.png',
    },
    online: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
.users-list-item {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  .users-list-item__avatar {
    min-width: 75px;
    min-height: 75px;
    flex: 0;
  }
  .users-list-item__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    flex: 1;
  }
  .users-list-item__last-message {
    width: 100%;
    color: var(--color-secondary-text);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
