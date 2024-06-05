import { memo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { VISUAL_COMPLEMENT_WRAP_VARIANTS } from '@/constants';
import {
    VISUAL_COMPLEMENT_ELEMENTS_ANIMATE,
    VISUAL_COMPLEMENT_ELEMENTS_TRANSITION,
    VISUAL_COMPLEMENT_GRADIENTS_TRANSITION,
} from './constants';
import Icon from '@/ui/Icon';
import s from './VisualComplement.module.css';

const VisualComplement: React.FC = () => {
    return (
        <motion.div
            className={s.wrap}
            initial={VISUAL_COMPLEMENT_WRAP_VARIANTS.hidden}
            whileInView={VISUAL_COMPLEMENT_WRAP_VARIANTS.visible}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <div className={s['content-wrap']}>
                <motion.div
                    className={s.center}
                    initial={{
                        scale: 0.7,
                    }}
                    whileInView={{
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                        delay: 0.4,
                    }}
                >
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
                </motion.div>
                <motion.div
                    className={clsx(s.element, s['top-left'])}
                    initial={{
                        opacity: 0,
                        x: '100%',
                        y: '100%',
                    }}
                    whileInView={VISUAL_COMPLEMENT_ELEMENTS_ANIMATE}
                    transition={VISUAL_COMPLEMENT_ELEMENTS_TRANSITION}
                >
                    <Icon className={s.icon} id="icon-coin-exchange_30" />
                </motion.div>
                <motion.div
                    className={clsx(s.element, s['top-right'])}
                    initial={{
                        opacity: 0,
                        x: '-100%',
                        y: '100%',
                    }}
                    whileInView={VISUAL_COMPLEMENT_ELEMENTS_ANIMATE}
                    transition={VISUAL_COMPLEMENT_ELEMENTS_TRANSITION}
                >
                    <Icon className={s.icon} id="icon-wallet_30" />
                </motion.div>
                <motion.div
                    className={clsx(s.element, s['bottom-left'])}
                    initial={{
                        opacity: 0,
                        x: '100%',
                        y: '-100%',
                    }}
                    whileInView={VISUAL_COMPLEMENT_ELEMENTS_ANIMATE}
                    transition={VISUAL_COMPLEMENT_ELEMENTS_TRANSITION}
                >
                    <Icon className={s.icon} id="icon-shield_30" />
                </motion.div>
                <motion.div
                    className={clsx(s.element, s['bottom-right'])}
                    initial={{
                        opacity: 0,
                        x: '-100%',
                        y: '-100%',
                    }}
                    whileInView={VISUAL_COMPLEMENT_ELEMENTS_ANIMATE}
                    transition={VISUAL_COMPLEMENT_ELEMENTS_TRANSITION}
                >
                    <Icon className={s.icon} id="icon-chart-candles_30" />
                </motion.div>
            </div>
            <span className={s['gradient-decor-wrap']}>
                <motion.img
                    className={clsx(s.decor, s.ameba)}
                    src="/images/side-section-decors/gradients/ameba-1.svg"
                    alt="decor ameba"
                    aria-hidden="true"
                    initial={{
                        opacity: 0,
                        scale: 2.5,
                        rotate: -45,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={VISUAL_COMPLEMENT_GRADIENTS_TRANSITION}
                />
                <motion.span
                    className={clsx(s.decor, s.circle)}
                    initial={{
                        opacity: 0,
                        scale: 4,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={VISUAL_COMPLEMENT_GRADIENTS_TRANSITION}
                />
            </span>
        </motion.div>
    );
};

export default memo(VisualComplement);
