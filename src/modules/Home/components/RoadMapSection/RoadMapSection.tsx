import { memo } from 'react';
import { ROADMAP_ITEMS } from './constants';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import RoadMapPin from './components/RoadMapPin';
import s from './RoadMapSection.module.css';

const RoadMapSection: React.FC = () => {
    return (
        <Container className={s.wrap} size="sm" asChild>
            <section id="roadmap">
                <div className={s.left}>
                    <Typography className={s.title} variant="title-h2" asChild>
                        <h1>Roadmap to Financial Innovation</h1>
                    </Typography>
                </div>
                <ul className={s.right}>
                    {ROADMAP_ITEMS.map((step, index) => {
                        return <RoadMapPin key={step.name} {...step} index={index + 1} />;
                    })}
                </ul>
            </section>
        </Container>
    );
};

export default memo(RoadMapSection);
