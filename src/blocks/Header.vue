<template>
  <div class="header">
    <div class="header-logo">
      <SvgIcon name="rainbow"></SvgIcon>
      <span class="header-logo__text">klementino</span>
    </div>
    <div class="header-tools">
      <div class="header-tool">
        <SvgIcon name="vip" :size="24"></SvgIcon>
      </div>
      <div class="header-tool">
        <SvgIcon name="sliders" :size="24"></SvgIcon>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
export default {
  name: 'Header',
  components: { SvgIcon },
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-heigth);
  z-index: 10;
  background-color: var(--color-background-main);
  padding: 0 16px;
  .header-logo {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    font-size: 20px;
    font-weight: bolder;
    color: var(--color-primary);
    .header-logo__text {
      margin-left: 8px;
    }
  }
  .header-tools {
    display: flex;
    align-items: center;
    .header-tool {
      margin-left: 8px;
      color: var(--color-favorite);
    }
  }
}
</style>
