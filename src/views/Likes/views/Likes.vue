<template>
  <Container class="likes">
    <div class="likes-header">
      <Heading weight="bold" type="1" class="likes-header__text">
        Matches
      </Heading>
      <div class="likes-header-actions">
        <div class="likes-header-action"></div>
      </div>
    </div>
    <div class="likes-content">
      <div
        v-for="section in cards"
        :key="section.title"
        class="likes-content-section"
      >
        <div class="likes-content-section__separator">
          <HorizontalSeparator>{{ section.title }}</HorizontalSeparator>
        </div>
        <div class="likes-content-section-cards">
          <div
            v-for="card in section.count"
            :key="`${section.title}@${card}`"
            class="likes-content-section__card-wrapper"
          >
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Container from '@/components/ui/Container/Container.vue'
import HorizontalSeparator from '@/views/Likes/components/HorizontalSeparator.vue'
import ProfileCard from '@/views/Likes/components/ProfileCard.vue'
import Heading from '@/components/ui/Heading/Heading.vue'

export default defineComponent({
  name: 'Likes',
  components: { Heading, ProfileCard, HorizontalSeparator, Container },
  setup() {
    const state = reactive({
      cards: [
        {
          title: 'today',
          count: 3,
        },
        {
          title: 'tomorrow',
          count: 1,
        },
        {
          title: '29.03',
          count: 4,
        },
      ],
    })

    return { ...toRefs(state) }
  },
})
</script>

<style scoped lang="scss">
.likes {
  padding-bottom: var(--nav-heigth);
}
.likes-header {
  .likes-header__text {
    font-size: 38px;
    font-weight: 800;
    font-family: 'Nunito', sans-serif;
  }
}
.likes-content {
  .likes-content-section {
    margin-top: 16px;
    .likes-content-section-cards {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .likes-content-section__card-wrapper {
        width: 48%;
        height: 200px;
        margin-top: 16px;
      }
    }
  }
}
</style>
