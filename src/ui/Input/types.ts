import type { WithClassName } from '@/types';

export type InputProps = WithClassName<{
    errorMessage?: string;
}> &
    React.ComponentProps<'input'>;
