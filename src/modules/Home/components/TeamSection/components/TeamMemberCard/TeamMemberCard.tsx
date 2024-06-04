import { memo, useMemo } from 'react';
import { useMediaQuery } from '@react-hookz/web';
import { Root as AvatarRoot, Image as AvatarImage, Fallback as AvatarFallback } from '@radix-ui/react-avatar';
import type { TeamMemberCardProps } from './types';
import clsx from 'clsx';
import Typography from '@/ui/Typography';
import s from './TeamMemberCard.module.css';

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ className, name, avatarUrl, position, description }) => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const avatarFallbackLabel = useMemo(() => {
        const [firstName, lastName] = name.split(' ');

        return `${firstName[0].toLocaleUpperCase()}${lastName[0].toLocaleUpperCase()}`;
    }, [name]);

    return (
        <article className={clsx(s.wrap, className)}>
            <AvatarRoot className={s.avatar}>
                <AvatarImage src={avatarUrl} alt={name} className={s.avatar} />
                <AvatarFallback className={s.fallback} asChild>
                    <Typography asChild>
                        <p>{avatarFallbackLabel}</p>
                    </Typography>
                </AvatarFallback>
            </AvatarRoot>
            <header className={s.header}>
                <Typography className={s.name} variant={isMobile ? 'title-h4' : 'title-h3'} asChild>
                    <h2>{name}</h2>
                </Typography>
                <Typography className={s.position} variant={isMobile ? 'text-md' : 'title-h4'} asChild>
                    <h3>{position}</h3>
                </Typography>
            </header>
            <Typography className={s.description} variant="text-md" asChild>
                <p>{description}</p>
            </Typography>
        </article>
    );
};

export default memo(TeamMemberCard);
