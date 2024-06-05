import type { Variants } from 'framer-motion';

export const HEADER_ANIMATION_VARIANTS: Variants = {
    hidden: {
        top: '-120px',
        opacity: 0,
    },
    visible: {
        top: 0,
        opacity: 1,
    },
};

export const HEADER_SCROLL_FILL_THRESHOLD = 200;
