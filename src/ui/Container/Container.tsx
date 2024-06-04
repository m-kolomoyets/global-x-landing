import clsx from 'clsx';
import type { ContainerProps } from './types';
import s from './Container.module.css';
import { Slot } from '@radix-ui/react-slot';

const Container: React.FC<ContainerProps> = ({ className, children, size = 'base', asChild }) => {
    const Comp = asChild ? Slot : 'div';

    return <Comp className={clsx(s.wrap, s[size], className)}>{children}</Comp>;
};

export default Container;
