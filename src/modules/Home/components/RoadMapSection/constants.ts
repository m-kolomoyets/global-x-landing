import type { RoadMapPinItem } from './components/RoadMapPin/types';

export const ROADMAP_ITEMS: Omit<RoadMapPinItem, 'index'>[] = [
    {
        iconId: 'icon-arrows-two-top_32',
        name: 'Crypto Launch',
        period: 'Q3 2024',
        description: 'Roll out self-custody wallet, crypto swapping, and fiat conversion capabilities.',
    },
    {
        iconId: 'icon-arrows-diagonal_32',
        name: 'Expand Payment Options',
        period: 'Q1 2025',
        description: 'Introduce ACH, RTP, and wire transactions to facilitate smoother, more accessible payments.',
    },
    {
        iconId: 'icon-arrows-cross_32',
        name: 'Full Banking Integration',
        period: 'Q3 2025',
        description:
            'Launch comprehensive banking services including checking and savings accounts, all enhanced by the flexibility of GPSC.',
    },
];
