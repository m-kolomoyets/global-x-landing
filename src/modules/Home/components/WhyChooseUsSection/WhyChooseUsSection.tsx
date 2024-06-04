import { memo } from 'react';
import Container from '@/ui/Container';
import s from './WhyChooseUsSection.module.css';

const WhyChooseUsSection: React.FC = () => {
    return (
        <Container className={s.wrap} asChild>
            <section>
                <div className={s.inner}>
                    <Container className={s['content-wrap']} size="sm" asChild>
                        <div>slider here</div>
                    </Container>
                </div>
            </section>
        </Container>
    );
};

export default memo(WhyChooseUsSection);
