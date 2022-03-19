<template>
  <div class="profile">
    <div class="profile-picture__wrapper">
      <ProfilePicture />
    </div>
    <Container class="profile-info">
      <DescriptionElement>
        <template #header>
          <Heading type="2">Aksimka, 24</Heading>
        </template>
        <Text> Frontend developer </Text>
      </DescriptionElement>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfilePicture from '@/views/Profile/blocks/ProfilePicture.vue'
import Text from '@/components/ui/Text/Text.vue'
import Container from '@/components/ui/Container/Container.vue'
import Heading from '@/components/ui/Heading/Heading.vue'
import DescriptionElement from '@/views/Profile/components/DescriptionElement.vue'

export default defineComponent({
  name: 'Main',
  components: { DescriptionElement, Heading, Container, Text, ProfilePicture },
  data() {
    return {
      inputValue: null,
    }
  },
})
</script>

<style scoped lang="scss">
.profile {
  .profile-picture__wrapper {
    position: sticky;
    top: -400px;
  }
  .profile-info {
    padding-top: 60px;
  }
}
</style>
