import type { WithClassName } from '@/types';
import type { SlotProps } from '@radix-ui/react-slot';

export type TypographyVariant =
    | 'title-h1'
    | 'title-h2'
    | 'title-h3'
    | 'title-h4'
    | 'control-button'
    | 'control-button-wallet'
    | 'control-tab'
    | 'text-md'
    | 'text-base'
    | 'text-sm'
    | 'text-xs'
    | 'label-base'
    | 'label-md';

export type TypographyProps = WithClassName<{
    asChild?: boolean;
    variant?: TypographyVariant;
}> &
    SlotProps;
