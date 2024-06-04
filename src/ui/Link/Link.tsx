import { forwardRef, memo } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { LinkProps } from './types';
import Typography from '@/ui/Typography';
import s from './Link.module.css';

const Link: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
    { className, children, variant = 'default', asChild },
    ref
) => {
    const Comp = asChild ? Slot : 'a';

    return (
        <Typography variant="text-base" asChild>
            <Comp ref={ref} className={clsx(s.wrap, 'focus-primary', className)} data-variant={variant}>
                {children}
            </Comp>
        </Typography>
    );
};

export default memo(forwardRef(Link));
