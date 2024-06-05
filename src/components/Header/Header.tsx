import { memo, useMemo } from 'react';
import { useMediaQuery } from '@react-hookz/web';
import { motion } from 'framer-motion';
import useDetectScroll, { Direction } from '@smakss/react-scroll-direction';
import clsx from 'clsx';
import { HEADER_ANIMATION_VARIANTS, HEADER_NAV_LINKS, HEADER_SCROLL_FILL_THRESHOLD } from './constants';
import Container from '@/ui/Container';
import Button from '@/ui/Button';
import Link from '@/ui/Link';
import Icon from '@/ui/Icon';
import HeaderMobileDialog from './HeaderMobileDialog';
import s from './Header.module.css';

const Header: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const { scrollDir, scrollPosition } = useDetectScroll();

    const isHeaderHidden = scrollPosition.top > 0 && scrollDir === Direction.Down;
    const isHeaderShown =
        scrollPosition.top < HEADER_SCROLL_FILL_THRESHOLD / 2 || (scrollPosition.top > 0 && scrollDir === Direction.Up);
    const isHeaderFilled = scrollPosition.top >= HEADER_SCROLL_FILL_THRESHOLD;

    const headerAnimationVariant = useMemo(() => {
        switch (true) {
            case isHeaderHidden: {
                return 'hidden';
            }
            case isHeaderShown:
            default: {
                return 'visible';
            }
        }
    }, [isHeaderHidden, isHeaderShown]);

    return (
        <motion.header
            className={s.wrap}
            variants={HEADER_ANIMATION_VARIANTS}
            transition={{
                type: 'spring',
                duration: 0.4,
            }}
            initial="visible"
            animate={headerAnimationVariant}
            data-state={isHeaderFilled ? 'filled' : 'default'}
        >
            <Container className={s.container}>
                <div className={clsx(s['logo-wrap'], 'focus-within-primary')}>
                    <a className={s.link} href="#">
                        <img className={s.image} src="/images/logo-white.webp" alt="GlobalX" />
                    </a>
                </div>
                {isMobile ? (
                    <HeaderMobileDialog />
                ) : (
                    <>
                        <nav className={s.nav}>
                            <ul className={s['nav-list']}>
                                {HEADER_NAV_LINKS.map((link) => {
                                    return (
                                        <Link className={s.item} key={link.href} variant="light" asChild>
                                            <a href={link.href}>{link.label}</a>
                                        </Link>
                                    );
                                })}
                            </ul>
                        </nav>
                        <Button asChild>
                            <a href="#">
                                <Icon id="icon-star_20" />
                                Join Waitlist
                            </a>
                        </Button>
                    </>
                )}
            </Container>
        </motion.header>
    );
};

export default memo(Header);
