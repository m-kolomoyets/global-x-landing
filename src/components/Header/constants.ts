import type { Variants } from 'framer-motion';
import type { HeaderLavLinkItem } from './types';

export const HEADER_NAV_LINKS: HeaderLavLinkItem[] = [
    {
        label: 'Token Info',
        href: 'https://etherscan.io/',
    },
    {
        label: 'Lite Paper',
        href: '#',
    },
    {
        label: 'Roadmap',
        href: '#roadmap',
    },
];

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
