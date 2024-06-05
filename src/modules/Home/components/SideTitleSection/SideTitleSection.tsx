import { memo } from 'react';
import clsx from 'clsx';
import type { SideTitleSectionProps } from './types';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import s from './SideTitleSection.module.css';
import { motion } from 'framer-motion';

const SideTitleSection: React.FC<SideTitleSectionProps> = ({
    className,
    children,
    view = 'default',
    title,
    subtitle,
}) => {
    return (
        <Container className={clsx(s.wrap, className)} size="sm" asChild>
            <motion.section
                data-view={view}
                initial={{
                    opacity: 0,
                    y: '70px',
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.75,
                }}
                viewport={{
                    amount: 0.5,
                }}
            >
                <header className={s['title-wrap']}>
                    <Typography className={s.title} variant="title-h2" asChild>
                        <h1>{title}</h1>
                    </Typography>
                    <Typography className={s.subtitle} variant="text-md" asChild>
                        <h3>{subtitle}</h3>
                    </Typography>
                </header>
                <div className={s['content-wrap']}>{children}</div>
            </motion.section>
        </Container>
    );
};

export default memo(SideTitleSection);
