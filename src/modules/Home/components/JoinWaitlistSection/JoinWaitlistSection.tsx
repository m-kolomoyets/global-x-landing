import { memo } from 'react';
import { useMediaQuery } from '@react-hookz/web';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import Icon from '@/ui/Icon';
import s from './JoinWaitlistSection.module.css';

const JoinWaitlistSection: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <Container className={s.wrap} asChild>
            <section>
                <div className={s.inner}>
                    <Container className={s['content-wrap']} size="sm">
                        <header className={s.header}>
                            <Typography className={s.title} variant="title-h2" asChild>
                                <h1>Join the GlobalX Waitlist!</h1>
                            </Typography>
                            <Typography className={s.subtitle} variant="text-md" asChild>
                                <h4>
                                    Sign up now and be among the first to experience the power of GPSC in transforming
                                    everyday transactions and financial growth.
                                </h4>
                            </Typography>
                        </header>
                        <form className={s.form}>
                            <Input className={s.input} type="email" autoComplete="email" placeholder="Enter email" />
                            <Button className={s.cta}>
                                {isMobile ? null : <Icon id="icon-star_20" />}
                                {isMobile ? 'Join' : 'Join Waitlist'}
                            </Button>
                        </form>
                    </Container>
                </div>
            </section>
        </Container>
    );
};

export default memo(JoinWaitlistSection);
