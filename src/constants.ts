import type { NavLinkItem } from './types';

/**
 * Environment variables
 */
export const IS_DEV = import.meta.env.DEV;
export const BASE_PUBLIC_PATH = import.meta.env.VITE_BASE_PUBLIC_PATH;
export const API_URL = import.meta.env.VITE_API_URL;

export const LOCK_SCROLL_Y_CLASS_NAME = 'lock-scroll-y';

export const SUPPORT_EMAIL = 'info@global-x.io';

export const NAV_LINKS: NavLinkItem[] = [
    {
        label: 'Token Info',
        href: 'https://etherscan.io/',
        isTargetBlank: true,
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
