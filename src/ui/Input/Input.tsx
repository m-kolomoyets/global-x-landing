import { forwardRef, memo } from 'react';
import clsx from 'clsx';
import type { InputProps } from './types';
import Typography from '../Typography';
import s from './Input.module.css';

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { className, errorMessage, ...rest },
    ref
) => {
    return (
        <div className={clsx(s.wrap, className)}>
            <input
                ref={ref}
                className={clsx(s.input, 'focus-primary', {
                    [s.error]: !!errorMessage,
                })}
                {...rest}
            />
            {errorMessage ? (
                <Typography className={s['error-message']} variant="text-sm" asChild>
                    <span>{errorMessage}</span>
                </Typography>
            ) : null}
        </div>
    );
};

export default memo(forwardRef(Input));
