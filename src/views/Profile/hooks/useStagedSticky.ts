export default <T extends HTMLElement>(wrapper: T, target: T): void => {
  wrapper.addEventListener('wheel', (e: WheelEvent) => {
    const currentStickyOffset = parseInt(target.style.top) || -500
    if (e.deltaY > 0) {
      target.style.top = `-500px`
    } else {
      const computeOffset = currentStickyOffset - e.deltaY / 2
      computeOffset >= -400
        ? (target.style.top = '-400px')
        : (target.style.top = `${computeOffset}px`)
    }
  })
}
