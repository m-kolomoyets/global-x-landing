import { memo } from 'react';
import clsx from 'clsx';
import type { CoinAdvantageCardProps } from './types';
import Typography from '@/ui/Typography';
import Icon from '@/ui/Icon';
import s from './CoinAdvantageCard.module.css';

const CoinAdvantageCard: React.FC<CoinAdvantageCardProps> = ({ className, iconId, title, alt }) => {
    return (
        <dl className={clsx(s.wrap, className)}>
            <dt className={s['icon-wrap']} title={alt}>
                <Icon className={s.icon} id={iconId} aria-hidden="true" />
                <span className="visually-hidden">{alt}</span>
            </dt>
            <Typography className={s.title} variant="text-md" asChild>
                <dd>{title}</dd>
            </Typography>
        </dl>
    );
};

export default memo(CoinAdvantageCard);
