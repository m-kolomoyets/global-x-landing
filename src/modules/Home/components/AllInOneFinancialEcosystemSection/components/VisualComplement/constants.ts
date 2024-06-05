import type { Target, Transition } from 'framer-motion';

export const VISUAL_COMPLEMENT_ELEMENTS_ANIMATE: Target = {
    opacity: 1,
    x: 0,
    y: 0,
};

export const VISUAL_COMPLEMENT_ELEMENTS_TRANSITION: Transition = {
    duration: 0.5,
    ease: 'easeInOut',
    delay: 0.45,
};

export const VISUAL_COMPLEMENT_GRADIENTS_TRANSITION: Transition = {
    duration: 1,
    ease: 'easeInOut',
    delay: 0.2,
};
