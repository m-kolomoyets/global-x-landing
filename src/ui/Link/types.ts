import { WithClassName } from '@/types';
import type { SlotProps } from '@radix-ui/react-slot';

export type LinkVariant = 'default' | 'light';

export type LinkProps = WithClassName<{
    variant?: LinkVariant;
    asChild?: boolean;
}> &
    SlotProps;
