<template>
  <div class="profile-card">
    <div class="profile-card__image-wrapper">
      <div class="blackout-layer"></div>
      <img :src="require(`@/assets/images/${img}`)" alt="profile image" />
    </div>
    <div class="profile-card-footer">
      <div class="profile-card-footer__name">{{ name }}, {{ old }}</div>
      <div class="profile-card-footer__action">
        <SvgIcon name="heart-line" :size="24" />
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
export default {
  name: 'ProfileCard',
  components: { SvgIcon },
  props: {
    name: {
      type: String,
      default: 'No name',
    },
    old: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: 'images/no-img.jpg',
    },
  },
}
</script>

<style scoped lang="scss">
.profile-card {
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  position: relative;
  .profile-card__image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    overflow: hidden;
    .blackout-layer {
      z-index: 2;
    }
    img {
      height: 100%;
      width: 150%;
      position: absolute;
      object-fit: cover;
    }
  }
  .profile-card-footer {
    position: absolute;
    z-index: 4;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-background-main);
    padding: 0 8px;
    background-color: rgba(95, 93, 93, 0.5);
    .profile-card-footer__name {
      font-weight: 600;
      font-size: 18px;
      flex: 1;
      text-overflow: ellipsis;
      --webkit-line-clamp: 1;
      overflow: hidden;
      white-space: nowrap;
    }
    .profile-card-footer__action {
      flex: 0;
      width: 28px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
