export function containerDelay(time: number) {
  return {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.5, delay: time }
    },
  }
}

export function containerSections(time: number) {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5, delay: time }
    }
  }
}
