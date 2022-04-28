<template>
  <Container class="chats">
    <div>
      <Heading weight="bold"> Matches </Heading>
      <div class="chats__likes d-flex">
        <div v-for="i in 7" :key="i" class="chat__like">
          <UserAvatar image="images/dg.png" />
        </div>
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
  padding-bottom: 8px;
  margin-top: 8px;
  .chat__like {
    width: 60px;
    margin-right: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
