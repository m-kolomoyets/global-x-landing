import { memo } from 'react';
import { TEAM_MEMBERS } from './constants';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import TeamMemberCard from './components/TeamMemberCard';
import s from './TeamSection.module.css';

const TeamSection: React.FC = () => {
    return (
        <Container className={s.wrap} size="sm" asChild>
            <section>
                <header className={s.header}>
                    <Typography className={s.title} variant="title-h2" asChild>
                        <h1>Meet The Team</h1>
                    </Typography>
                </header>
                <ul className={s.members}>
                    {TEAM_MEMBERS.map((member) => {
                        return (
                            <li className={s.member} key={member.name}>
                                <TeamMemberCard className={s.card} {...member} />
                            </li>
                        );
                    })}
                </ul>
            </section>
        </Container>
    );
};

export default memo(TeamSection);
