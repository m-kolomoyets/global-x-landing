import type { FCProps } from '@/types';

export type ContainerSize = 'base' | 'sm';

export type ContainerProps = FCProps<{
    asChild?: boolean;
    size?: ContainerSize;
}>;
