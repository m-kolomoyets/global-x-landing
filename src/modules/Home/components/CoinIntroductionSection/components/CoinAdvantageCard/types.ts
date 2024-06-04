import type { WithClassName } from '@/types';
import type { IconId } from '@/ui/Icon/types';

export type CoinAdvantageCardProps = WithClassName<{
    iconId: IconId;
    title: React.ReactNode;
    alt: string;
}>;
