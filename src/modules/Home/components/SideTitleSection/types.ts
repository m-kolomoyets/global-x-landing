import type { FCProps } from '@/types';

export type SideTitleSectionView = 'default' | 'reverse';

export type SideTitleSectionProps = FCProps<{
    title: React.ReactNode;
    subtitle: React.ReactNode;
    view?: SideTitleSectionView;
}>;
