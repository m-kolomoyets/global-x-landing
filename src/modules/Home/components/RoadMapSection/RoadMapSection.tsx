import { memo, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useEventListener } from '@react-hookz/web';
import { ROADMAP_ITEMS } from './constants';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import RoadMapPin from './components/RoadMapPin';
import s from './RoadMapSection.module.css';

const RoadMapSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'end center'],
    });

    const [activePin, setActivePin] = useState(0);

    useEventListener(window, 'scroll', () => {
        const scrollOffset = scrollYProgress.get();

        if (scrollOffset >= 0 && scrollOffset < 0.4) {
            setActivePin(0);
        }

        if (scrollOffset >= 0.4 && scrollOffset < 0.7) {
            setActivePin(1);
        }

        if (scrollOffset >= 0.7) {
            setActivePin(2);
        }
    });

    return (
        <Container className={s.wrap} size="sm" asChild>
            <section ref={ref} id="roadmap">
                <div className={s.left}>
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
                                duration: 0.5,
                                delay: 0.4,
                            }}
                        >
                            Roadmap to Financial Innovation
                        </motion.h1>
                    </Typography>
                </div>
                <motion.ul
                    className={s.right}
                    initial={{
                        opacity: 0,
                        y: '20px',
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.6,
                    }}
                >
                    {ROADMAP_ITEMS.map((step, index) => {
                        return (
                            <RoadMapPin key={step.name} {...step} index={index + 1} isActive={index === activePin} />
                        );
                    })}
                </motion.ul>
            </section>
        </Container>
    );
};

export default memo(RoadMapSection);
