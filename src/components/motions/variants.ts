interface ContainerDelayProps {
  time: number,
  axisHidden: { x?: number, y?: number },
  axisVisible: { x?: number, y?: number }
}

export function containerDelay({ time, axisHidden, axisVisible }: ContainerDelayProps) {
  return {
    hidden: { opacity: 0, x: axisHidden.x ?? 0, y: axisHidden.y ?? 0 },
    visible: {
      opacity: 1, x: axisVisible.x ?? 0, y: axisVisible.y ?? 0,
      transition: { duration: 0.5, delay: time }
    },
  }
}
