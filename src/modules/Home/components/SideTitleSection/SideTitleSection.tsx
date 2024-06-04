import { memo } from 'react';
import clsx from 'clsx';
import type { SideTitleSectionProps } from './types';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import s from './SideTitleSection.module.css';

const SideTitleSection: React.FC<SideTitleSectionProps> = ({
    className,
    children,
    view = 'default',
    title,
    subtitle,
}) => {
    return (
        <Container className={clsx(s.wrap, className)} asChild>
            <section data-view={view}>
                <header className={s['title-wrap']}>
                    <Typography className={s.title} variant="title-h2" asChild>
                        <h1>{title}</h1>
                    </Typography>
                    <Typography className={s.subtitle} variant="text-md" asChild>
                        <h3>{subtitle}</h3>
                    </Typography>
                </header>
                <div className={s['content-wrap']}>{children}</div>
            </section>
        </Container>
    );
};

export default memo(SideTitleSection);
