export const AppearSlideX = (delayInSec, xStart) => ({
  hidden: { opacity: 0, x: xStart },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: delayInSec },
  },
});

export const AppearSlideY = (delayInSec, yStart) => ({
  hidden: { opacity: 0, y: yStart },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: delayInSec },
  },
});
