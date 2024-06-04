import { IconProps } from './types';
import { forwardRef, memo } from 'react';

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = ({ id, className, ...rest }, ref) => {
    const size = id.split('_')?.[1];

    return (
        <svg ref={ref} width={size} height={size} className={className} {...rest}>
            <use href={`/images/sprite.svg#${id}`} />
        </svg>
    );
};

export default memo(forwardRef(Icon));
