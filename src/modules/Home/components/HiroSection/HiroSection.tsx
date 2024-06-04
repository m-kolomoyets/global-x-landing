import { memo } from 'react';
import Typography from '@/ui/Typography';
import s from './HiroSection.module.css';
import CallToActionButton from '../CallToActionButton';
import Container from '@/ui/Container';
import clsx from 'clsx';

const HiroSection: React.FC = () => {
    return (
        <Container className={clsx(s.wrap, 'full-height')} asChild>
            <section>
                <div className={s.inner}>
                    <header className={s.header}>
                        <Typography className={s.title} variant="title-h1" asChild>
                            <h1>Welcome to the GlobalX</h1>
                        </Typography>
                        <Typography className={s.subtitle} variant="title-h2" asChild>
                            <h2>
                                Your Gateway to Innovative <br /> Financial Solutions
                            </h2>
                        </Typography>
                    </header>
                    <footer className={s.footer}>
                        <CallToActionButton />
                    </footer>
                    <img className={s.noise} src="/images/noise.webp" alt="background noise" aria-hidden="true" />
                    {/* <span className={s['decor-gradient']} /> */}
                    <span className={s['decor-gradient']} data-position="bottom-left" aria-hidden="true" />
                    <span className={s['decor-gradient']} data-position="top-right" aria-hidden="true" />
                </div>
            </section>
        </Container>
    );
};

export default memo(HiroSection);
