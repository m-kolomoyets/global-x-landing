import { memo } from 'react';
import s from './VisualComplement.module.css';
import Icon from '@/ui/Icon';
import clsx from 'clsx';

const VisualComplement: React.FC = () => {
    return (
        <div className={s.wrap}>
            <div className={s['content-wrap']}>
                <div className={clsx(s.element, s.left)}>
                    <img
                        src="/images/side-section-decors/icon-wrappers/circle-no-right.svg"
                        aria-hidden="true"
                        alt="bank icon wrapper"
                    />
                    <Icon className={s.icon} id="icon-bank_30" />
                </div>
                <div className={clsx(s['arrow-wrap'], s.left)}>
                    <Icon className={s.icon} id="icon-arrows-two-top_32" />
                </div>
                <div className={clsx(s.element, s.center)}>
                    <img
                        src="/images/side-section-decors/icon-wrappers/hexagon-no-sides.svg"
                        aria-hidden="true"
                        alt="logo icon wrapper"
                    />
                    <Icon className={s.icon} id="icon-logo-vertical_48" />
                </div>
                <div className={clsx(s['arrow-wrap'], s.right)}>
                    <Icon className={s.icon} id="icon-arrows-two-top_32" />
                </div>
                <div className={clsx(s.element, s.left)}>
                    <img
                        src="/images/side-section-decors/icon-wrappers/circle-no-left.svg"
                        aria-hidden="true"
                        alt="bank icon wrapper"
                    />
                    <Icon className={s.icon} id="icon-atom_30" />
                </div>
            </div>
            <span className={s['gradient-decor']} />
        </div>
    );
};

export default memo(VisualComplement);
