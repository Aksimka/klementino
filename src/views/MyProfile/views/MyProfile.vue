<template>
  <div v-if="profileInfo" ref="sectionWrapper" class="profile">
    <div ref="pictureWrapper" class="profile-picture__wrapper">
      <ProfilePicture
        :name="combineName(profileInfo)"
        :images="profileInfo?.images"
      />
    </div>
    <Container v-if="!editMode" class="profile-actions">
      <RoundButton class="profile-action background_main">
        <SvgIcon
          class="profile-action__icon color_primary"
          name="pencil"
          :size="decreaseButton ? 22 : 34"
          @click="setEditMode(true)"
        />
      </RoundButton>
    </Container>
    <Container v-else class="profile-actions confirm-edit">
      <RoundButton class="profile-action background_main">
        <SvgIcon
          class="profile-action__icon color_error"
          name="cross"
          :size="decreaseButton ? 22 : 34"
          @click="cancelChanges"
        />
      </RoundButton>
      <RoundButton class="profile-action background_main ml-4">
        <SvgIcon
          class="profile-action__icon color_favorite"
          name="check"
          :size="decreaseButton ? 22 : 34"
          @click="confirmChanges"
        />
      </RoundButton>
    </Container>

    <Container class="profile-info">
      <DescriptionElement class="profile-info__element">
        <template #header>
          <div v-if="editMode" class="d-flex">
            <Input v-model:value="profileInfo.name" label="Name" />
          </div>
          <Heading v-else type="2" weight="bold"
            >{{ combineName(profileInfo) }}
          </Heading>
        </template>
        <Input
          v-if="editMode"
          v-model:value="profileInfo.business"
          label="business"
        />
        <Text v-else weight="bold"> {{ profileInfo?.business }}</Text>
      </DescriptionElement>
      <DescriptionElement class="profile-info__element">
        <template #header>
          <Heading v-if="!editMode" type="6" weight="800">About</Heading>
        </template>
        <Textarea
          v-if="editMode"
          v-model:value="profileInfo.about"
          label="About"
          rows="7"
        ></Textarea>
        <Text v-else weight="bold">
          {{ profileInfo?.about }}
        </Text>
      </DescriptionElement>
      <DescriptionElement class="profile-info__element">
        <pre>{{ originalProfile }}</pre>
        <template #header>
          <Heading type="6" weight="bold">Interests</Heading>
        </template>
        <div v-if="editMode" class="add-chips">
          <div class="add-chips__input">
            <Input v-model:value="editChipText" placeholder="input tag..." />
          </div>
          <div class="add-chips__confirm">
            <SvgIcon
              :disabled="!editChipText"
              name="plus"
              :size="34"
              @click="addInterest(editChipText)"
            />
          </div>
        </div>
        <ChipsGroup>
          <Chip
            v-for="i in profileInfo?.interests"
            :key="i"
            class="profile-info__chip"
          >
            <template #default>
              {{ i }}
            </template>
            <template v-if="editMode" #icon>
              <SvgIcon name="cross" :size="16" @click="removeInterest(i)" />
            </template>
          </Chip>
        </ChipsGroup>
      </DescriptionElement>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { deepCopy } from '@/helpers'
import useUserStore from '@/store/modules/user'
import useProfile from '@/hooks/useProfile'
import useDecreaseButton from '@/hooks/useDecreaseButton'
import useEditMode from '@/views/MyProfile/hooks/useEditMode'
import ProfilePicture from '@/blocks/ProfilePicture.vue'
import Text from '@/components/ui/Text/Text.vue'
import Container from '@/components/ui/Container/Container.vue'
import Heading from '@/components/ui/Heading/Heading.vue'
import DescriptionElement from '@/views/ProfileCardsSwiper/components/DescriptionElement.vue'
import Chip from '@/components/ui/Chip/Chip.vue'
import ChipsGroup from '@/components/ui/ChipsGroup/ChipsGroup.vue'
import RoundButton from '@/components/ui/RoundButton/RoundButton.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import Input from '@/components/ui/Input/Input.vue'
import Textarea from '@/components/ui/Textarea/Textarea.vue'
import { Profile } from '@/types'

export default defineComponent({
  name: 'Main',
  components: {
    Textarea,
    Input,
    SvgIcon,
    RoundButton,
    ChipsGroup,
    Chip,
    DescriptionElement,
    Heading,
    Container,
    Text,
    ProfilePicture,
  },
  setup() {
    const router = useRouter()
    const currentUserid = Number(router?.currentRoute.value.params.id)

    const userStore = useUserStore()
    const { profileInfo } = userStore

    const { combineName } = useProfile()
    const {
      editMode,
      editChipText,
      profileToEdit,
      setEditMode,
      cancelChanges,
      confirmChanges,
      addInterest,
      removeInterest,
    } = useEditMode(deepCopy(profileInfo))

    const { decreaseButton } = useDecreaseButton()

    return {
      profileInfo: profileToEdit,
      originalProfile: profileInfo,
      editMode,
      decreaseButton,
      currentUserid,
      editChipText,
      addInterest,
      removeInterest,
      setEditMode,
      cancelChanges,
      confirmChanges,
      combineName,
    }
  },
})
</script>

<style scoped lang="scss">
.profile {
  width: calc(100% - 16px);
  margin: 0 auto;
  border-radius: 40px;

  .profile-actions {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    position: fixed;
    bottom: calc(8px + var(--nav-heigth));
    width: 100%;
    z-index: 2;

    .profile-action {
      background-color: var(--color-background-main);
    }
  }

  .confirm-edit {
    justify-content: center;
  }

  .profile-info {
    height: 1500px;
    padding-top: 40px;

    .profile-info__element {
      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }

    .profile-info__chip {
      margin: 8px 0 0 8px;
    }
  }
  .add-chips {
    display: flex;
    align-items: center;
    .add-chips__confirm {
      margin-left: 4px;
      color: var(--color-primary);
    }
    .add-chips__confirm + .disabled {
      color: var(--color-gray);
    }
  }
}
</style>
