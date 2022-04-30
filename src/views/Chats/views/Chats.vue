<template>
  <Container class="chats">
    <Heading weight="bold"> Matches </Heading>
    <div class="chats__likes d-flex">
      <UserAvatar
        class="mr-3"
        accent
        name="Likes"
        :images="['images/dg.png']"
      />
      <div v-for="i in 7" :key="i" class="chat__like">
        <UserAvatar :images="['images/dg.png']" />
      </div>
    </div>
  </Container>
</template>

<script>
import Heading from '@/components/ui/Heading/Heading'
import UserAvatar from '@/views/Chats/components/UserAvatar'
import Container from '@/components/ui/Container/Container'

export default {
  name: 'Chats',
  components: { Container, UserAvatar, Heading },
}
</script>

<style scoped lang="scss">
.chats__likes {
  max-width: 100%;
  overflow-x: scroll;
  margin-top: 8px;
  padding: 4px 4px 8px 4px;
  .chat__like {
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
