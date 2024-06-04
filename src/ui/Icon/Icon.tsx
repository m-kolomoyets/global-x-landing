import { IconProps } from './types';
import { forwardRef, memo } from 'react';

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = ({ id, className, ...rest }, ref) => {
    const size = id.split('_')?.[1];

    return (
        <svg
            ref={ref}
            style={{
                width: size ? `${size}px` : 'auto',
                height: size ? `${size}px` : 'auto',
            }}
            className={className}
            {...rest}
        >
            <use href={`/images/sprite.svg#${id}`} />
        </svg>
    );
};

export default memo(forwardRef(Icon));
