import type { WithClassName } from '@/types';
import Button from '@/ui/Button';
import Icon from '@/ui/Icon';
import s from './CallToActionButton.module.css';

const CallToActionButton: React.FC<WithClassName<unknown>> = ({ className }) => {
    return (
        <Button className={className}>
            <Icon className={s.icon} id="icon-star_20" />
            Join Waitlist
        </Button>
    );
};

export default CallToActionButton;
