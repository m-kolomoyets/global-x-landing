import { memo } from 'react';
import clsx from 'clsx';
import Icon from '@/ui/Icon';
import s from './VisualComplement.module.css';

const VisualComplement: React.FC = () => {
    return (
        <div className={s.wrap}>
            <div className={s['content-wrap']}>
                <div className={s.center}>
                    <img
                        src="/images/side-section-decors/icon-wrappers/cross.svg"
                        alt="decor center"
                        aria-hidden="true"
                    />
                    <img
                        className={s.decor}
                        src="/images/side-section-decors/decors/cross-center.svg"
                        alt="cross center"
                        aria-hidden="true"
                    />
                </div>
                <div className={clsx(s.element, s['top-left'])}>
                    <Icon className={s.icon} id="icon-coin-exchange_30" />
                </div>
                <div className={clsx(s.element, s['top-right'])}>
                    <Icon className={s.icon} id="icon-wallet_30" />
                </div>
                <div className={clsx(s.element, s['bottom-left'])}>
                    <Icon className={s.icon} id="icon-shield_30" />
                </div>
                <div className={clsx(s.element, s['bottom-right'])}>
                    <Icon className={s.icon} id="icon-chart-candles_30" />
                </div>
            </div>
            <span className={s['gradient-decor-wrap']}>
                <img
                    className={clsx(s.decor, s.ameba)}
                    src="/images/side-section-decors/gradients/ameba-1.svg"
                    alt="decor ameba"
                    aria-hidden="true"
                />
                <span className={clsx(s.decor, s.circle)} />
            </span>
        </div>
    );
};

export default memo(VisualComplement);
