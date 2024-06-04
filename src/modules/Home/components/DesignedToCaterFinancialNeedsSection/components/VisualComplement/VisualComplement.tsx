import { memo } from 'react';
import clsx from 'clsx';
import Icon from '@/ui/Icon';
import s from './VisualComplement.module.css';

const VisualComplement: React.FC = () => {
    return (
        <div className={s.wrap}>
            <div className={s['content-wrap']}>
                <div className={clsx(s['elements-row'], s.top)}>
                    <div className={clsx(s.element, s.top)}>
                        <img
                            className={s.decor}
                            src="/images/side-section-decors/icon-wrappers/arrow.svg"
                            alt="decor arrow"
                        />
                        <Icon className={s.icon} id="icon-tag_32" />
                    </div>
                </div>
                <div className={clsx(s['elements-row'], s.bottom)}>
                    <div className={clsx(s.element, s['bottom-left'])}>
                        <img
                            className={s.decor}
                            src="/images/side-section-decors/icon-wrappers/arrow.svg"
                            alt="decor arrow"
                        />
                        <Icon className={s.icon} id="icon-shopping-bag_32" />
                    </div>
                    <div className={clsx(s.element, s['bottom-right'])}>
                        <img
                            className={s.decor}
                            src="/images/side-section-decors/icon-wrappers/arrow.svg"
                            alt="decor arrow"
                        />
                        <Icon className={s.icon} id="icon-return-of-investments_32" />
                    </div>
                </div>
                <span className={clsx(s.dot, s['top-left'])} />
                <span className={clsx(s.dot, s['top-right'])} />
                <span className={clsx(s.dot, s['bottom-left'])} />
            </div>
            <span className={s['gradient-decor-wrap']}>
                <img
                    className={clsx(s.decor, s.ameba)}
                    src="/images/side-section-decors/gradients/ameba-2.svg"
                    alt="decor ameba"
                    aria-hidden="true"
                />
            </span>
        </div>
    );
};

export default memo(VisualComplement);
