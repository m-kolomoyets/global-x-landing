import { memo } from 'react';
import { useMediaQuery } from '@react-hookz/web';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import Icon from '@/ui/Icon';
import s from './JoinWaitlistSection.module.css';
import { motion } from 'framer-motion';
import { HIRO_SECTION_GRADIENTS_ANIMATION, HIRO_SECTION_GRADIENTS_TRANSITION } from '../HiroSection/constants';

const JoinWaitlistSection: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <Container className={s.wrap} asChild>
            <motion.section
                initial={{
                    opacity: 0,
                    y: '50px',
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.7,
                    delay: 0.4,
                }}
            >
                <div className={s.inner}>
                    <Container className={s['content-wrap']} size="sm">
                        <header className={s.header}>
                            <Typography className={s.title} variant="title-h2" asChild>
                                <motion.h1
                                    initial={{
                                        opacity: 0,
                                        y: '20px',
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.6,
                                    }}
                                >
                                    Join the GlobalX Waitlist!
                                </motion.h1>
                            </Typography>
                            <Typography className={s.subtitle} variant="text-md" asChild>
                                <motion.h4
                                    initial={{
                                        opacity: 0,
                                        y: '20px',
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.8,
                                    }}
                                >
                                    Sign up now and be among the first to experience the power of GPSC in transforming
                                    everyday transactions and financial growth.
                                </motion.h4>
                            </Typography>
                        </header>
                        <motion.form
                            className={s.form}
                            initial={{
                                opacity: 0,
                                y: '20px',
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 1,
                            }}
                        >
                            <Input className={s.input} type="email" autoComplete="email" placeholder="Enter email" />
                            <Button className={s.cta}>
                                {isMobile ? null : <Icon id="icon-star_20" />}
                                {isMobile ? 'Join' : 'Join Waitlist'}
                            </Button>
                        </motion.form>
                    </Container>
                    <img className={s.noise} src="/images/noise.webp" alt="background noise" aria-hidden="true" />
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
                </div>
            </motion.section>
        </Container>
    );
};

export default memo(JoinWaitlistSection);
