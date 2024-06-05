import { useScroll } from 'framer-motion';
import Header from '@/components/Header';
import HiroSection from './components/HiroSection';
import RevolutionizeFinancialExperienceSection from './components/RevolutionizeFinancialExperienceSection';
import AllInOneFinancialEcosystemSection from './components/AllInOneFinancialEcosystemSection';
import DesignedToCaterFinancialNeedsSection from './components/DesignedToCaterFinancialNeedsSection';
import CoinIntroductionSection from './components/CoinIntroductionSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TeamSection from './components/TeamSection';
import RoadMapSection from './components/RoadMapSection';
import JoinWaitlistSection from './components/JoinWaitlistSection';
import ScrollToTop from './components/ScrollToTop';
import s from './Home.module.css';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <div className="full-height">
                <Header />
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
                <JoinWaitlistSection />
                <Footer />
            </div>
            <ScrollToTop scrollProgress={scrollYProgress} />
        </>
    );
};

export default Home;
