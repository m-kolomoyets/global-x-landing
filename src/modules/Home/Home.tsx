import HiroSection from './components/HiroSection';
import RevolutionizeFinancialExperienceSection from './components/RevolutionizeFinancialExperienceSection';
import AllInOneFinancialEcosystemSection from './components/AllInOneFinancialEcosystemSection';
import DesignedToCaterFinancialNeedsSection from './components/DesignedToCaterFinancialNeedsSection';
import CoinIntroductionSection from './components/CoinIntroductionSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TeamSection from './components/TeamSection';
import RoadMapSection from './components/RoadMapSection';
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
            <WhyChooseUsSection />
            <TeamSection />
            <RoadMapSection />
        </div>
    );
};

export default Home;
