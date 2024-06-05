import { memo } from 'react';
import clsx from 'clsx';
import { NAV_LINKS, SUPPORT_EMAIL } from '@/constants';
import Container from '@/ui/Container';
import Link from '@/ui/Link';
import s from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={s.wrap}>
            <Container className={s.container}>
                <div className={clsx(s['logo-wrap'], 'focus-within-primary')}>
                    <a className={s.link} href="#">
                        <img className={s.image} src="/images/logo-white.webp" alt="GlobalX" />
                    </a>
                </div>
                <nav className={s.nav}>
                    <ul className={s['nav-list']}>
                        {NAV_LINKS.map((link) => {
                            return (
                                <Link className={s.item} key={link.href} variant="light" asChild>
                                    <a href={link.href}>{link.label}</a>
                                </Link>
                            );
                        })}
                    </ul>
                    <span className={s.split} />
                    <Link className={s.email} variant="light" asChild>
                        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                    </Link>
                </nav>
            </Container>
        </footer>
    );
};

export default memo(Footer);
