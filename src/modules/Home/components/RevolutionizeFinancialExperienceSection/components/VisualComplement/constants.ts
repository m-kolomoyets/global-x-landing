import { Target, Transition } from 'framer-motion';

export const VISUAL_COMPLEMENT_ELEMENTS_LEFT_INITIAL: Target = {
    opacity: 0,
    x: '100%',
};

export const VISUAL_COMPLEMENT_ELEMENTS_RIGHT_INITIAL: Target = {
    opacity: 0,
    x: '-100%',
};

export const VISUAL_COMPLEMENT_ELEMENTS_SIDES_ANIMATE: Target = {
    opacity: 1,
    x: 0,
};

export const VISUAL_COMPLEMENT_ELEMENTS_SIDES_TRANSITION: Transition = {
    duration: 0.75,
    ease: 'easeInOut',
};

export const VISUAL_COMPLEMENT_ELEMENT_CENTER_INITIAL: Target = {
    opacity: 0,
    scale: 0.75,
};

export const VISUAL_COMPLEMENT_ELEMENT_CENTER_ANIMATE: Target = {
    opacity: 1,
    scale: 1,
};

export const VISUAL_COMPLEMENT_ARROWS_TRANSITION: Transition = {
    duration: 0.5,
    ease: 'easeInOut',
};
