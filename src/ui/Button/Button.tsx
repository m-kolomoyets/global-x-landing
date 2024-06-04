import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { ButtonProps } from './types';
import s from './Button.module.css';

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
    { className, variant = 'base', asChild, ...rest },
    ref
) => {
    const Comp = asChild ? Slot : 'button';

    return <Comp ref={ref} className={clsx(s.wrap, s[variant], 'focus-primary', className)} {...rest} />;
};
Button.displayName = 'Button';

export default forwardRef(Button);
