import { onBeforeUnmount, onMounted, ref } from 'vue'

export default () => {
  const decreaseButton = ref<boolean>(false)

  const eventFunction = () => {
    decreaseButton.value = window.scrollY > 10
  }

  onMounted(() => {
    document.addEventListener('scroll', eventFunction)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('scroll', eventFunction)
  })

  return decreaseButton
}
