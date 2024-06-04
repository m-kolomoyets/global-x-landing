import { WithClassName } from '@/types';
import Button from '@/ui/Button';
import Icon from '@/ui/Icon';
import s from './CallToActionButton.module.css';
import clsx from 'clsx';

const CallToActionButton: React.FC<WithClassName<unknown>> = ({ className }) => {
    return (
        <Button className={clsx(s.wrap, className)}>
            <Icon className={s.icon} id="icon-star_20" />
            <span className={s.label}>Join Waitlist</span>
        </Button>
    );
};

export default CallToActionButton;
