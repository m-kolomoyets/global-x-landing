import { memo } from 'react';
import { useMediaQuery } from '@react-hookz/web';
import clsx from 'clsx';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import Button from '@/ui/Button';
import Icon from '@/ui/Icon';
import s from './HiroSection.module.css';

const HiroSection: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <Container className={clsx(s.wrap, 'full-height')} asChild>
            <section id="#hiro">
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
                        <Button asChild>
                            <a href="#">
                                {isMobile ? null : <Icon id="icon-star_20" />}
                                Join Waitlist
                            </a>
                        </Button>
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
