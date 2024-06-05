import { memo } from 'react';
import clsx from 'clsx';
import Icon from '@/ui/Icon';
import s from './VisualComplement.module.css';
import { motion } from 'framer-motion';
import { VISUAL_COMPLEMENT_WRAP_VARIANTS } from '@/constants';
import {
    VISUAL_COMPLEMENTS_ELEMENTS_ANIMATE,
    VISUAL_COMPLEMENT_ELEMENTS_INITIAL,
    VISUAL_COMPLEMENT_ELEMENTS_TRANSITION,
} from './constants';

const VisualComplement: React.FC = () => {
    return (
        <motion.div
            className={s.wrap}
            initial={VISUAL_COMPLEMENT_WRAP_VARIANTS.hidden}
            whileInView={VISUAL_COMPLEMENT_WRAP_VARIANTS.visible}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <div className={s['content-wrap']}>
                <div className={clsx(s['elements-row'], s.top)}>
                    <motion.div
                        className={clsx(s.element, s.top)}
                        initial={{
                            ...VISUAL_COMPLEMENT_ELEMENTS_INITIAL,
                            y: '50%',
                        }}
                        whileInView={VISUAL_COMPLEMENTS_ELEMENTS_ANIMATE}
                        transition={VISUAL_COMPLEMENT_ELEMENTS_TRANSITION}
                    >
                        <img
                            className={s.decor}
                            src="/images/side-section-decors/icon-wrappers/arrow.svg"
                            alt="decor arrow"
                        />
                        <Icon className={s.icon} id="icon-tag_32" />
                    </motion.div>
                </div>
                <div className={clsx(s['elements-row'], s.bottom)}>
                    <motion.div
                        className={clsx(s.element, s['bottom-left'])}
                        initial={{
                            ...VISUAL_COMPLEMENT_ELEMENTS_INITIAL,
                            y: '-50%',
                            x: '50%',
                        }}
                        whileInView={VISUAL_COMPLEMENTS_ELEMENTS_ANIMATE}
                        transition={VISUAL_COMPLEMENT_ELEMENTS_TRANSITION}
                    >
                        <img
                            className={s.decor}
                            src="/images/side-section-decors/icon-wrappers/arrow.svg"
                            alt="decor arrow"
                        />
                        <Icon className={s.icon} id="icon-shopping-bag_32" />
                    </motion.div>
                    <motion.div
                        className={clsx(s.element, s['bottom-right'])}
                        initial={{
                            ...VISUAL_COMPLEMENT_ELEMENTS_INITIAL,
                            y: '-50%',
                            x: '-50%',
                        }}
                        whileInView={VISUAL_COMPLEMENTS_ELEMENTS_ANIMATE}
                        transition={VISUAL_COMPLEMENT_ELEMENTS_TRANSITION}
                    >
                        <img
                            className={s.decor}
                            src="/images/side-section-decors/icon-wrappers/arrow.svg"
                            alt="decor arrow"
                        />
                        <Icon className={s.icon} id="icon-return-of-investments_32" />
                    </motion.div>
                </div>
                <motion.span
                    className={clsx(s.dot, s['top-left'])}
                    initial={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_INITIAL,
                        x: '50%',
                        y: '50%',
                    }}
                    whileInView={VISUAL_COMPLEMENTS_ELEMENTS_ANIMATE}
                    transition={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_TRANSITION,
                        delay: 0.4,
                    }}
                />
                <motion.span
                    className={clsx(s.dot, s['top-right'])}
                    initial={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_INITIAL,
                        x: '-50%',
                        y: '50%',
                    }}
                    whileInView={VISUAL_COMPLEMENTS_ELEMENTS_ANIMATE}
                    transition={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_TRANSITION,
                        delay: 0.4,
                    }}
                />
                <motion.span
                    className={clsx(s.dot, s['bottom-left'])}
                    initial={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_INITIAL,
                        y: '-50%',
                    }}
                    whileInView={VISUAL_COMPLEMENTS_ELEMENTS_ANIMATE}
                    transition={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_TRANSITION,
                        delay: 0.4,
                    }}
                />
            </div>
            <span className={s['gradient-decor-wrap']}>
                <motion.img
                    className={clsx(s.decor, s.ameba)}
                    src="/images/side-section-decors/gradients/ameba-2.svg"
                    alt="decor ameba"
                    aria-hidden="true"
                    initial={{
                        opacity: 0,
                        scale: 2.5,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        delay: 0.2,
                    }}
                />
            </span>
        </motion.div>
    );
};

export default memo(VisualComplement);
