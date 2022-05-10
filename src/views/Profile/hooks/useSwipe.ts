import { computed, Ref, ComputedRef, ref, reactive } from 'vue'

export type SwipeSides = 'left' | 'right'

type UseSwipeType = {
  dragOffset: Ref<number>
  initTouchEvent: Ref<Touch | null>
  currentTouchEvent: Ref<Touch | null>
  swipeSide: Ref<SwipeSides | null>
  stylesByPosition: ComputedRef<Record<'transform', string>>
  prevStylesByPosition: ComputedRef<Record<'transform', string>>
  swipeStates: {
    isStart: boolean
    isSwiping: boolean
    isEnds: boolean
  }
  swipeHandler(e: TouchEventInit): void
  startSwipe(e: TouchEventInit): void
  endSwipe(): void
}

export default (): UseSwipeType => {
  const dragOffset = ref<number>(0)
  const initTouchEvent = ref<Touch | null>(null)
  const currentTouchEvent = ref<Touch | null>(null)
  const swipeSide = ref<SwipeSides | null>(null)
  const swipeStates = reactive({
    isStart: false,
    isSwiping: false,
    isEnds: false,
  })

  const swipeHandler = (e: TouchEventInit) => {
    swipeStates.isStart = false
    swipeStates.isSwiping = true
    const touch = e.touches?.[0]
    if (window.pageYOffset >= 30) {
      endSwipe()
      return
    }
    if (!touch) {
      return
    }
    if (currentTouchEvent.value) {
      dragOffset.value =
        dragOffset.value - (currentTouchEvent.value.clientX - touch.clientX)
    }
    if (dragOffset.value > 100) {
      swipeSide.value = 'right'
    } else if (dragOffset.value < -100) {
      swipeSide.value = 'left'
    } else {
      swipeSide.value = null
    }

    currentTouchEvent.value = touch
  }
  const startSwipe = (e: TouchEventInit) => {
    swipeStates.isStart = true
    swipeStates.isSwiping = true
    const touch = e.touches?.[0]
    if (!touch) return
    initTouchEvent.value = touch
  }
  const endSwipe = () => {
    swipeStates.isEnds = true
    swipeStates.isSwiping = false
    currentTouchEvent.value = null
    switch (swipeSide.value) {
      case 'left':
        dragOffset.value = -400
        break
      case 'right':
        dragOffset.value = 400
        break
      default:
        dragOffset.value = 0
    }
    swipeSide.value = null
    setTimeout(() => {
      swipeStates.isEnds = false
      dragOffset.value = 0
    }, 200)
  }

  const stylesByPosition = computed(() => {
    const scale = 1 - Math.abs(dragOffset.value) / 1000
    return {
      transform: 'translateX(' + dragOffset.value + 'px) scale(' + scale + ')',
    }
  })

  const prevStylesByPosition = computed(() => {
    const scale = 0.9 + Math.abs(dragOffset.value) / 2000
    const scaleLimit = scale > 1 ? 1 : scale
    const opacity = 0.7 + Math.abs(dragOffset.value) / 1000

    return {
      transform: 'scale(' + scaleLimit + ')',
      opacity: opacity,
    }
  })

  return {
    dragOffset,
    initTouchEvent,
    currentTouchEvent,
    swipeSide,
    stylesByPosition,
    prevStylesByPosition,
    swipeStates,
    swipeHandler,
    startSwipe,
    endSwipe,
  }
}
