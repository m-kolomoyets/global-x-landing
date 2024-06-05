import { memo } from 'react';
import { useMediaQuery } from '@react-hookz/web';
import clsx from 'clsx';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import Button from '@/ui/Button';
import Icon from '@/ui/Icon';
import s from './HiroSection.module.css';
import { motion } from 'framer-motion';
import {
    HIRO_SECTION_GRADIENTS_ANIMATION,
    HIRO_SECTION_GRADIENTS_TRANSITION,
    HIRO_SECTION_TITLES_ANIMATION,
    HIRO_SECTION_TITLES_TRANSITION,
} from './constants';

const HiroSection: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <Container className={clsx(s.wrap, 'full-height')} asChild>
            <section id="#hiro">
                <motion.div
                    className={s.inner}
                    animate={{
                        opacity: [0, 1],
                        translateY: [50, 0],
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <header className={s.header}>
                        <Typography className={s.title} variant="title-h1" asChild>
                            <motion.h1
                                animate={HIRO_SECTION_TITLES_ANIMATION}
                                transition={{
                                    ...HIRO_SECTION_TITLES_TRANSITION,
                                    delay: 0.2,
                                }}
                            >
                                Welcome to the GlobalX
                            </motion.h1>
                        </Typography>
                        <Typography className={s.subtitle} variant="title-h2" asChild>
                            <motion.h2
                                animate={HIRO_SECTION_TITLES_ANIMATION}
                                transition={{
                                    ...HIRO_SECTION_TITLES_TRANSITION,
                                    delay: 0.6,
                                }}
                            >
                                Your Gateway to Innovative <br /> Financial Solutions
                            </motion.h2>
                        </Typography>
                    </header>
                    <footer className={s.footer}>
                        <Button asChild>
                            <motion.a
                                href="#"
                                animate={{
                                    opacity: [0, 1],
                                    translateY: [-20, 0],
                                }}
                                transition={{
                                    ...HIRO_SECTION_TITLES_TRANSITION,
                                    delay: 1,
                                }}
                            >
                                {isMobile ? null : <Icon id="icon-star_20" />}
                                Join Waitlist
                            </motion.a>
                        </Button>
                    </footer>
                    <img className={s.noise} src="/images/noise.webp" alt="background noise" aria-hidden="true" />
                    {/* <span className={s['decor-gradient']} /> */}
                    <motion.span
                        className={s['decor-gradient']}
                        data-position="bottom-left"
                        aria-hidden="true"
                        animate={HIRO_SECTION_GRADIENTS_ANIMATION}
                        transition={HIRO_SECTION_GRADIENTS_TRANSITION}
                    />
                    <motion.span
                        className={s['decor-gradient']}
                        data-position="top-right"
                        aria-hidden="true"
                        animate={HIRO_SECTION_GRADIENTS_ANIMATION}
                        transition={{
                            ...HIRO_SECTION_GRADIENTS_TRANSITION,
                            delay: 0.5,
                        }}
                    />
                </motion.div>
            </section>
        </Container>
    );
};

export default memo(HiroSection);
