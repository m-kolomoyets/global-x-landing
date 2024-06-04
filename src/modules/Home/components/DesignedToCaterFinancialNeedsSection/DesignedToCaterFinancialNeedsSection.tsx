import { memo } from 'react';
import SideTitleSection from '../SideTitleSection';
import s from './DesignedToCaterFinancialNeedsSection.module.css';

const DesignedToCaterFinancialNeedsSection: React.FC = () => {
    return (
        <SideTitleSection
            className={s.wrap}
            title="Designed to cater to all your financial needs globally"
            subtitle={<>Whether you&apos;re a consumer, a merchant, or an investor</>}
        >
            hello
        </SideTitleSection>
    );
};

export default memo(DesignedToCaterFinancialNeedsSection);
