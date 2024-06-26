import type { WithClassName } from '@/types';
import type { IconId } from '@/ui/Icon/types';

export type RoadMapPinItem = {
    iconId: IconId;
    index: number;
    name: string;
    period: string;
    description: React.ReactNode;
    isActive?: boolean;
};

export type RoadMapPinProps = WithClassName<RoadMapPinItem>;
