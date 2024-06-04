import { memo } from 'react';
import SideTitleSection from '../SideTitleSection';
import s from './AllInOneFinancialEcosystemSection.module.css';

const AllInOneFinancialEcosystemSection: React.FC = () => {
    return (
        <SideTitleSection
            className={s.wrap}
            title={<>All-in-one&nbsp;financial ecosystem</>}
            subtitle="Experience the stability and versatility of GPSC, our revolutionary stablecoin fully backed by British Pound (GBP) cash reserves."
            view="reverse"
        >
            hello
        </SideTitleSection>
    );
};

export default memo(AllInOneFinancialEcosystemSection);
