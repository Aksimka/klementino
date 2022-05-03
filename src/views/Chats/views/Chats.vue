<template>
  <Container class="chats">
    <Heading weight="bold"> Matches </Heading>
    <div class="chats__likes d-flex">
      <UserAvatar
        class="mr-3"
        accent
        name="Likes"
        :images="['images/dg.png', 'images/no-img.jpg', 'images/journal.jpeg']"
      />
      <div v-for="i in likes" :key="i.id" class="chat__like">
        <UserAvatar :name="i.name" :images="[i.img]" :online="i.isOnline" />
      </div>
    </div>
    <Heading class="mt-3" weight="bold"> Chats </Heading>
    <div>
      <UsersListItem
        v-for="i in chats"
        :key="i.id"
        class="my-4"
        :text="i.lastMessage"
        :name="i.name"
        :image="i.img"
        :online="i.isOnline"
      />
    </div>
  </Container>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Heading from '@/components/ui/Heading/Heading'
import UserAvatar from '@/views/Chats/components/UserAvatar'
import Container from '@/components/ui/Container/Container'
import UsersListItem from '@/views/Chats/components/UsersListItem'
import likesList from '@/views/Chats/heplers/mock/likesList'
import chatsList from '@/views/Chats/heplers/mock/chatsList'

export default defineComponent({
  name: 'Chats',
  components: { UsersListItem, Container, UserAvatar, Heading },
  setup() {
    let likes = ref(likesList)
    let chats = ref(chatsList)

    return { likes, chats }
  },
})
</script>

<style scoped lang="scss">
.chats__likes {
  max-width: 100%;
  overflow-x: scroll;
  margin-top: 8px;
  padding: 4px 0 8px 4px;
  &::-webkit-scrollbar {
    display: none;
  }
  .chat__like {
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
