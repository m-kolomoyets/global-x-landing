import { TargetAndTransition, Transition } from 'framer-motion';

export const HIRO_SECTION_GRADIENTS_ANIMATION: TargetAndTransition = {
    opacity: [0.5, 1, 0.5],
};

export const HIRO_SECTION_TITLES_ANIMATION: TargetAndTransition = {
    opacity: [0, 1],
    translateY: [20, 0],
    scaleY: [0.99, 1],
};

export const HIRO_SECTION_GRADIENTS_TRANSITION: Transition = {
    duration: 3,
    ease: 'easeIn',
    times: [0, 1],
    repeat: Infinity,
    repeatDelay: 0.2,
};

export const HIRO_SECTION_TITLES_TRANSITION: Transition = {
    duration: 0.5,
};
