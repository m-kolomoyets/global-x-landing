import { memo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { COIN_ADVANTAGES } from './constants';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import CoinAdvantageCard from './components/CoinAdvantageCard';
import s from './CoinIntroductionSection.module.css';

const CoinIntroductionSection: React.FC = () => {
    return (
        <Container className={s.wrap} size="sm" asChild>
            <section>
                <header className={s.header}>
                    <Typography className={s.title} variant="title-h2" asChild>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: '25%',
                                scaleY: 0.95,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scaleY: 1,
                            }}
                            transition={{
                                duration: 0.75,
                                ease: 'easeInOut',
                                delay: 0.1,
                            }}
                            viewport={{
                                amount: 0.9,
                            }}
                        >
                            Introducing GPSC:The Stablecoin That Powers Our Ecosystem
                        </motion.h1>
                    </Typography>
                    <div className={s['subtitle-wrap']}>
                        <Typography className={s.subtitle} variant="text-md" asChild>
                            <motion.h3>
                                <motion.a
                                    className={clsx(s.link, 'focus-primary')}
                                    href="#"
                                    initial={{
                                        opacity: 0,
                                        y: '-10px',
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.75,
                                        ease: 'easeInOut',
                                        delay: 0.8,
                                    }}
                                >
                                    GlobalX (GPSC)
                                </motion.a>
                                &nbsp;
                                <motion.span
                                    initial={{
                                        opacity: 0,
                                        y: '-10px',
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.75,
                                        ease: 'easeInOut',
                                        delay: 1.25,
                                    }}
                                >
                                    is a cryptocurrency token that has emerged as a key player in the ever-expanding
                                    digital asset landscape.
                                </motion.span>
                            </motion.h3>
                        </Typography>
                    </div>
                </header>
                <ul className={s.advantages}>
                    {COIN_ADVANTAGES.map((advantage, index) => {
                        return (
                            <motion.li
                                key={advantage.alt}
                                className={s.advantage}
                                initial={{
                                    opacity: 0,
                                    y: '40px',
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                    delay: 0.75 + 0.2 * (index + 1),
                                }}
                            >
                                <CoinAdvantageCard {...advantage} />
                            </motion.li>
                        );
                    })}
                </ul>
            </section>
        </Container>
    );
};

export default memo(CoinIntroductionSection);
