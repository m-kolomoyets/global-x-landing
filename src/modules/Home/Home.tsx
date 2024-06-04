import HiroSection from './components/HiroSection';
import RevolutionizeFinancialExperienceSection from './components/RevolutionizeFinancialExperienceSection';
import AllInOneFinancialEcosystemSection from './components/AllInOneFinancialEcosystemSection';
import DesignedToCaterFinancialNeedsSection from './components/DesignedToCaterFinancialNeedsSection';
import CoinIntroductionSection from './components/CoinIntroductionSection';
import s from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className="full-height">
            <HiroSection />
            <div className={s['side-sections-wrap']}>
                <RevolutionizeFinancialExperienceSection />
                <AllInOneFinancialEcosystemSection />
                <DesignedToCaterFinancialNeedsSection />
            </div>
            <CoinIntroductionSection />
        </div>
    );
};

export default Home;
