import type { WithClassName } from '@/types';

export type TeamMemberItem = {
    avatarUrl: string;
    name: string;
    position: string;
    description: React.ReactNode;
};

export type TeamMemberCardProps = WithClassName<TeamMemberItem>;
