type AnimationOption = {
  direction: string;
  speed?: number;
  delay?: number;
  opacity?: number;
};

type AnimationStyle = {
  transform: string;
  opacity: number;
  transition: string;
};

/**
 * @description Generate style config to animate element when in view
 *
 * Options:
 * - direction: CSS transition syntax (e.g. translateX(-200px))
 * - speed: transition speed (default: 0)
 * - delay: transition delay (default: 0)
 * @param {boolean} isInView
 * @param {AnimationOption} opt Animation option config object
 * @returns {AnimationStyle} CSS style animation annotation
 */
export function animateInViewElement(
  isInView: boolean,
  { direction, speed = 0, delay = 0, opacity = 1 }: AnimationOption,
): AnimationStyle {
  return {
    transform: isInView ? 'none' : direction,
    opacity: isInView ? opacity : 0,
    transition: `opacity ${speed}s cubic-bezier(0.645, 0.045, 0.355, 1) ${delay}ms, transform ${speed}s cubic-bezier(0.645, 0.045, 0.355, 1) ${delay}ms`,
  };
}
