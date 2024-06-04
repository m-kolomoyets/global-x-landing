import { memo } from 'react';
import SideTitleSection from '../SideTitleSection';
import s from './RevolutionizeFinancialExperienceSection.module.css';
import VisualComplement from './components/VisualComplement';

const RevolutionizeFinancialExperienceSection: React.FC = () => {
    return (
        <SideTitleSection
            className={s.wrap}
            title={<>Revolutionize Your&nbsp;Financial&nbsp;Experience</>}
            subtitle="Join the future of finance with GlobalX"
        >
            <VisualComplement />
        </SideTitleSection>
    );
};

export default memo(RevolutionizeFinancialExperienceSection);
