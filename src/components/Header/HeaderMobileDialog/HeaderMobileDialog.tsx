import { memo } from 'react';
import {
    Root as AlertDialogRoot,
    Trigger as AlertDialogTrigger,
    Portal as AlertDialogPortal,
    Overlay as AlertDialogOverlay,
    Content as AlertDialogContent,
    Cancel as AlertDialogCancel,
    Title as AlertDialogTitle,
} from '@radix-ui/react-alert-dialog';
import { useToggle } from '@react-hookz/web';
import clsx from 'clsx';
import { NAV_LINKS, SUPPORT_EMAIL } from '@/constants';
import Button from '@/ui/Button';
import Icon from '@/ui/Icon';
import Link from '@/ui/Link';
import s from './HeaderMobileDialog.module.css';

const HeaderMobileDialog: React.FC = () => {
    const [isOpened, toggleIsOpened] = useToggle();

    return (
        <AlertDialogRoot open={isOpened} onOpenChange={toggleIsOpened}>
            <AlertDialogTrigger className={clsx(s.trigger, s.open, 'focus-primary')}>
                <Icon className={s.icon} id="icon-hamburger_24" />
            </AlertDialogTrigger>
            <AlertDialogPortal>
                <AlertDialogOverlay className={s.overlay} />
                <AlertDialogContent className={s.content}>
                    <AlertDialogTitle className={s.title} asChild>
                        <header>
                            <div className={clsx(s['logo-wrap'], 'focus-within-primary')}>
                                <a
                                    className={s.link}
                                    href="#"
                                    onClick={() => {
                                        toggleIsOpened(false);
                                    }}
                                >
                                    <img className={s.image} src="/images/logo-white.webp" alt="GlobalX" />
                                </a>
                            </div>
                            <AlertDialogCancel className={clsx(s.trigger, s.close, 'focus-primary')}>
                                <Icon className={s.icon} id="icon-cross_20" />
                            </AlertDialogCancel>
                        </header>
                    </AlertDialogTitle>
                    <div className={s.inner}>
                        <nav className={s.nav}>
                            <ul className={s['nav-list']}>
                                {NAV_LINKS.map((link) => {
                                    return (
                                        <Link className={s.item} key={link.href} variant="light" asChild>
                                            <a
                                                href={link.href}
                                                onClick={() => {
                                                    toggleIsOpened(false);
                                                }}
                                            >
                                                {link.label}
                                            </a>
                                        </Link>
                                    );
                                })}
                            </ul>
                        </nav>
                        <Button className={s.cta} asChild>
                            <a href="#">Join Waitlist</a>
                        </Button>
                        <span className={s.split} />
                        <Link className={s.email} variant="light" asChild>
                            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                        </Link>
                    </div>
                </AlertDialogContent>
            </AlertDialogPortal>
        </AlertDialogRoot>
    );
};

export default memo(HeaderMobileDialog);
