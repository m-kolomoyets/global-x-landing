import { memo } from 'react';
import { TEAM_MEMBERS } from './constants';
import Typography from '@/ui/Typography';
import Container from '@/ui/Container';
import TeamMemberCard from './components/TeamMemberCard';
import s from './TeamSection.module.css';
import { motion } from 'framer-motion';

const TeamSection: React.FC = () => {
    return (
        <Container className={s.wrap} size="sm" asChild>
            <section>
                <header className={s.header}>
                    <Typography className={s.title} variant="title-h2" asChild>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: '20px',
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                            }}
                        >
                            Meet The Team
                        </motion.h1>
                    </Typography>
                </header>
                <ul className={s.members}>
                    {TEAM_MEMBERS.map((member, index) => {
                        return (
                            <motion.li
                                className={s.member}
                                key={member.name}
                                initial={{
                                    opacity: 0,
                                    y: '20px',
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.7 + 0.2 * (index + 1),
                                }}
                            >
                                <TeamMemberCard className={s.card} {...member} />
                            </motion.li>
                        );
                    })}
                </ul>
            </section>
        </Container>
    );
};

export default memo(TeamSection);
