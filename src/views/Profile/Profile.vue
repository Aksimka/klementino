<template>
  <div class="profile">
    <div class="profile-picture__wrapper">
      <ProfilePicture />
    </div>
    <Container class="profile-info">
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="2" weight="bold">Aksimka, 24</Heading>
        </template>
        <Text weight="bold"> Frontend developer </Text>
      </DescriptionElement>
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="6" weight="800">About</Heading>
        </template>
        <Text weight="bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at
          blanditiis corporis culpa ea, eius et fugiat minima modi omnis ratione
          ullam veritatis vitae. Architecto corporis cupiditate debitis deserunt
          dolor dolorem eum harum laudantium nesciunt officiis reprehenderit
          saepe, tenetur. Alias aliquam dolor ea eveniet ex explicabo fugit,
          impedit neque tenetur!
        </Text>
      </DescriptionElement>
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading type="6" weight="bold">Interests</Heading>
        </template>
        <ChipsGroup>
          <Chip v-for="i in chips" :key="i" class="profile-info__chip">
            {{ i }}
          </Chip>
        </ChipsGroup>
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
import Chip from '@/components/ui/Chip/Chip.vue'
import ChipsGroup from '@/components/ui/ChipsGroup/ChipsGroup.vue'

export default defineComponent({
  name: 'Main',
  components: {
    ChipsGroup,
    Chip,
    DescriptionElement,
    Heading,
    Container,
    Text,
    ProfilePicture,
  },
  data() {
    return {
      inputValue: null,
      chips: [
        'qweqwe',
        'qwe',
        'qweqfdsav',
        'qwdcqw',
        'qwfqw',
        'svasvas',
        'vbngbdsbfb',
        'ascvd',
      ],
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
    height: 1000px;
    padding-top: 70px;
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
</style>
