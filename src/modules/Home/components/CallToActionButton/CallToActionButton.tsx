import { WithClassName } from '@/types';
import Button from '@/ui/Button';
import Icon from '@/ui/Icon';

const CallToActionButton: React.FC<WithClassName<unknown>> = ({ className }) => {
    return (
        <Button className={className}>
            <Icon id="icon-star_20" />
            Join Waitlist
        </Button>
    );
};

export default CallToActionButton;
