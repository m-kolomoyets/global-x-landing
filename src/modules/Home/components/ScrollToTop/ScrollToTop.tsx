import { motion } from 'framer-motion';
import { useEventListener, useToggle } from '@react-hookz/web';
import type { ScrollToTopProps } from './types';
import Icon from '@/ui/Icon';
import s from './ScrollToTop.module.css';

const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollProgress }) => {
    const [isActive, setIsActive] = useToggle(false);

    useEventListener(window, 'scroll', () => {
        setIsActive(window.scrollY >= 400);
    });

    return (
        <a className={s.wrap} href="#" data-state={isActive ? 'active' : 'inactive'}>
            <svg className={s.progress} width="48" height="48" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="21" pathLength="1" className={s.bg} />
                <motion.circle
                    cx="24"
                    cy="24"
                    r="21"
                    pathLength="1"
                    className={s.indicator}
                    style={{ pathLength: scrollProgress }}
                />
            </svg>
            <Icon className={s.icon} id="icon-arrows-two-top_32" />
        </a>
    );
};

export default ScrollToTop;
