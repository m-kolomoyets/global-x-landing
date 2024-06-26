import { memo } from 'react';
import clsx from 'clsx';
import { useLocomotiveScrollContext } from '@/context/LocomotiveScrollContext';
import { NAV_LINKS, SUPPORT_EMAIL } from '@/constants';
import Container from '@/ui/Container';
import Link from '@/ui/Link';
import s from './Footer.module.css';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const { locomotiveScroll } = useLocomotiveScrollContext();

    return (
        <motion.footer
            className={s.wrap}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 0.4,
                delay: 0.6,
            }}
        >
            <Container className={s.container}>
                <div className={s['logo-wrap']}>
                    <button
                        className={clsx(s.link, 'focus-primary')}
                        onClick={() => {
                            locomotiveScroll.scrollTo(0, {
                                duration: 2,
                            });
                            history.pushState(null, '', '#');
                        }}
                    >
                        <img className={s.image} src="/images/logo-white.webp" alt="GlobalX" />
                    </button>
                </div>
                <nav className={s.nav}>
                    <ul className={s['nav-list']}>
                        {NAV_LINKS.map((link) => {
                            return (
                                <Link className={s.item} key={link.href} variant="light" asChild>
                                    <a
                                        href={link.href}
                                        target={link?.isTargetBlank ? '_blank' : undefined}
                                        rel={link?.isTargetBlank ? 'noopener noreferrer' : undefined}
                                    >
                                        {link.label}
                                    </a>
                                </Link>
                            );
                        })}
                        <Link className={s.item} variant="light" asChild>
                            <button
                                onClick={() => {
                                    locomotiveScroll.scrollTo('#roadmap');
                                    history.pushState(null, '', '#roadmap');
                                }}
                            >
                                Roadmap
                            </button>
                        </Link>
                    </ul>
                    <span className={s.split} />
                    <Link className={s.email} variant="light" asChild>
                        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                    </Link>
                </nav>
            </Container>
        </motion.footer>
    );
};

export default memo(Footer);
