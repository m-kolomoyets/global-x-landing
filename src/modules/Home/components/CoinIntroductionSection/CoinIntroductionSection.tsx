import { memo } from 'react';
import clsx from 'clsx';
import { COIN_ADVANTAGES } from './constants';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import CoinAdvantageCard from './components/CoinAdvantageCard';
import s from './CoinIntroductionSection.module.css';

const CoinIntroductionSection: React.FC = () => {
    return (
        <Container className={s.wrap} size="sm" asChild>
            <section>
                <header className={s.header}>
                    <Typography className={s.title} variant="title-h2" asChild>
                        <h1>Introducing GPSC:The Stablecoin That Powers Our Ecosystem</h1>
                    </Typography>
                    <div className={s['subtitle-wrap']}>
                        <Typography className={s.subtitle} variant="text-md" asChild>
                            <h3>
                                <a className={clsx(s.link, 'focus-primary')} href="#">
                                    GlobalX (GPSC)
                                </a>
                                &nbsp;is a cryptocurrency token that has emerged as a key player in the ever-expanding
                                digital asset landscape.
                            </h3>
                        </Typography>
                    </div>
                </header>
                <ul className={s.advantages}>
                    {COIN_ADVANTAGES.map((advantage) => {
                        return (
                            <li key={advantage.alt} className={s.advantage}>
                                <CoinAdvantageCard {...advantage} />
                            </li>
                        );
                    })}
                </ul>
            </section>
        </Container>
    );
};

export default memo(CoinIntroductionSection);
