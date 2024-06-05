import { memo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Icon from '@/ui/Icon';
import { VISUAL_COMPLEMENT_WRAP_VARIANTS } from '@/constants';
import {
    VISUAL_COMPLEMENT_ELEMENTS_SIDES_ANIMATE,
    VISUAL_COMPLEMENT_ELEMENTS_LEFT_INITIAL,
    VISUAL_COMPLEMENT_ELEMENTS_RIGHT_INITIAL,
    VISUAL_COMPLEMENT_ELEMENTS_SIDES_TRANSITION,
    VISUAL_COMPLEMENT_ELEMENT_CENTER_INITIAL,
    VISUAL_COMPLEMENT_ELEMENT_CENTER_ANIMATE,
    VISUAL_COMPLEMENT_ARROWS_TRANSITION,
} from './constants';
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
                    className={clsx(s.element, s.left)}
                    initial={VISUAL_COMPLEMENT_ELEMENTS_LEFT_INITIAL}
                    whileInView={VISUAL_COMPLEMENT_ELEMENTS_SIDES_ANIMATE}
                    transition={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_SIDES_TRANSITION,

                        delay: 0.3,
                    }}
                >
                    <img
                        src="/images/side-section-decors/icon-wrappers/circle-no-right.svg"
                        aria-hidden="true"
                        alt="bank icon wrapper"
                    />
                    <Icon className={s.icon} id="icon-bank_30" />
                </motion.div>
                <motion.div
                    className={clsx(s['arrow-wrap'], s.left)}
                    initial={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_LEFT_INITIAL,
                        rotateZ: -90,
                    }}
                    whileInView={VISUAL_COMPLEMENT_ELEMENTS_SIDES_ANIMATE}
                    transition={{
                        ...VISUAL_COMPLEMENT_ARROWS_TRANSITION,
                        ease: [0.42, 0, 0.58, 1],
                        delay: 0.3,
                    }}
                >
                    <Icon className={s.icon} id="icon-arrows-two-top_32" />
                </motion.div>
                <motion.div
                    className={clsx(s.element, s.center)}
                    initial={VISUAL_COMPLEMENT_ELEMENT_CENTER_INITIAL}
                    whileInView={VISUAL_COMPLEMENT_ELEMENT_CENTER_ANIMATE}
                    transition={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_SIDES_TRANSITION,
                        delay: 0.1,
                    }}
                >
                    <img
                        src="/images/side-section-decors/icon-wrappers/hexagon-no-sides.svg"
                        aria-hidden="true"
                        alt="logo icon wrapper"
                    />
                    <Icon className={s.icon} id="icon-logo-vertical_48" />
                </motion.div>
                <motion.div
                    className={clsx(s['arrow-wrap'], s.right)}
                    initial={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_RIGHT_INITIAL,
                        rotateZ: 90,
                    }}
                    whileInView={VISUAL_COMPLEMENT_ELEMENTS_SIDES_ANIMATE}
                    transition={{
                        ...VISUAL_COMPLEMENT_ARROWS_TRANSITION,
                        delay: 0.3,
                    }}
                >
                    <Icon className={s.icon} id="icon-arrows-two-top_32" />
                </motion.div>
                <motion.div
                    className={clsx(s.element, s.left)}
                    initial={VISUAL_COMPLEMENT_ELEMENTS_RIGHT_INITIAL}
                    whileInView={VISUAL_COMPLEMENT_ELEMENTS_SIDES_ANIMATE}
                    transition={{
                        ...VISUAL_COMPLEMENT_ELEMENTS_SIDES_TRANSITION,
                        delay: 0.3,
                    }}
                >
                    <img
                        src="/images/side-section-decors/icon-wrappers/circle-no-left.svg"
                        aria-hidden="true"
                        alt="bank icon wrapper"
                    />
                    <Icon className={s.icon} id="icon-atom_30" />
                </motion.div>
            </div>
            <motion.span
                className={s['gradient-decor']}
                initial={{
                    opacity: 0,
                    scale: 0.75,
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
        </motion.div>
    );
};

export default memo(VisualComplement);
