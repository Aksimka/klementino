<template>
  <Container class="chats">
    <div>
      <Heading> Matches </Heading>
      <div class="chats__matches d-flex">
        <UserAvatar v-for="i in 7" :key="i" class="chat__match" />
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
.chats__matches {
  max-width: 100%;
  overflow-x: scroll;
  padding-bottom: 12px;
  .chat__match {
    margin-right: 8px;
  }
}
</style>
