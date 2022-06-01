import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

export default () => {
  const width = ref<number>(window.innerWidth)
  const resizeHandlerCache = (e: Event) => {
    const target = e.target as Window
    width.value = target.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', resizeHandlerCache)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandlerCache)
  })

  const isDesktop = computed(() => {
    return !!(width.value && width.value > 480)
  })

  return { isDesktop }
}
