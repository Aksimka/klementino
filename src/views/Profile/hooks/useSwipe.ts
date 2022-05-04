import { computed, Ref, ComputedRef, ref } from 'vue'

type SwipeSides = 'left' | 'right'

type useSwipeType = {
  dragOffset: Ref<number>
  initTouchEvent: Ref<Touch | null>
  currentTouchEvent: Ref<Touch | null>
  swipeSide: Ref<SwipeSides | null>
  stylesByPosition: ComputedRef<Record<'transform', string>>
  swipeHandler(e: TouchEventInit): void
  startSwipe(e: TouchEventInit): void
  endSwipe(): void
}

export default (): useSwipeType => {
  const dragOffset = ref<number>(0)
  const initTouchEvent = ref<Touch | null>(null)
  const currentTouchEvent = ref<Touch | null>(null)
  const swipeSide = ref<SwipeSides | null>(null)

  // eslint-disable-next-line no-undef
  const swipeHandler = (e: TouchEventInit) => {
    const touch = e.touches?.[0]
    if (!touch) return
    if (currentTouchEvent.value) {
      dragOffset.value =
        dragOffset.value - (currentTouchEvent.value.clientX - touch.clientX)
    }
    if (dragOffset.value > 100) {
      swipeSide.value = 'right'
    }
    if (dragOffset.value < -100) {
      swipeSide.value = 'left'
    }
    currentTouchEvent.value = touch
  }
  // eslint-disable-next-line no-undef
  const startSwipe = (e: TouchEventInit) => {
    const touch = e.touches?.[0]
    if (!touch) return
    initTouchEvent.value = touch
  }
  // eslint-disable-next-line no-undef
  const endSwipe = () => {
    dragOffset.value = 0
    swipeSide.value = null
    currentTouchEvent.value = null
  }

  const stylesByPosition = computed(() => {
    const scale = 1 - Math.abs(dragOffset.value) / 1000
    return {
      transform: 'translateX(' + dragOffset.value + 'px) scale(' + scale + ')',
    }
  })

  return {
    dragOffset,
    initTouchEvent,
    currentTouchEvent,
    swipeSide,
    stylesByPosition,
    swipeHandler,
    startSwipe,
    endSwipe,
  }
}
