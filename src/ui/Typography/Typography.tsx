import { forwardRef, memo } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { TypographyProps } from './types';
import s from './Typography.module.css';

const Typography: React.ForwardRefRenderFunction<HTMLDivElement, TypographyProps> = (
    { asChild, variant = 'body', className, ...rest },
    ref
) => {
    const Comp = asChild ? Slot : 'div';

    return <Comp ref={ref} className={clsx(s.wrap, s[variant], className)} {...rest} />;
};

export default memo(forwardRef(Typography));
