import { useScroll } from 'framer-motion';
import clsx from 'clsx';
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
import Footer from '@/components/Footer';
import s from './Home.module.css';

const Home: React.FC = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <div className={clsx(s.wrap, 'full-height')} data-scroll data-scroll-speed="0.5">
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
