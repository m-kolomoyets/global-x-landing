import { Target, Transition } from 'framer-motion';

export const VISUAL_COMPLEMENT_ELEMENTS_INITIAL: Target = {
    opacity: 0,
    scale: 0.8,
};

export const VISUAL_COMPLEMENTS_ELEMENTS_ANIMATE: Target = {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
};

export const VISUAL_COMPLEMENT_ELEMENTS_TRANSITION: Transition = {
    duration: 0.5,
    ease: 'easeInOut',
    delay: 0.45,
};
