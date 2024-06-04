import { memo } from 'react';
import clsx from 'clsx';
import type { RoadMapPinProps } from './types';
import Typography from '@/ui/Typography';
import Icon from '@/ui/Icon';
import s from './RoadMapPin.module.css';

const RoadMapPin: React.FC<RoadMapPinProps> = ({ className, index, iconId, name, period, description }) => {
    const formattedIndex = index.toString().padStart(2, '0');

    return (
        <li className={clsx(s.wrap, className)}>
            <div className={s['icon-wrap']}>
                <Icon className={s.icon} id={iconId} />
            </div>
            <div className={s.content}>
                <Typography className={s.name} variant="title-h3" asChild>
                    <h4>
                        {formattedIndex}.&nbsp;{name}
                    </h4>
                </Typography>
                <Typography className={s.period} variant="title-h4" asChild>
                    <h5>({period})</h5>
                </Typography>
                <Typography className={s.description} variant="text-md" asChild>
                    <p>{description}</p>
                </Typography>
            </div>
        </li>
    );
};

export default memo(RoadMapPin);
