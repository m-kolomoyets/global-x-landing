import Typography from '@/ui/Typography';
import CallToActionButton from './components/CallToActionButton';

const Home: React.FC = () => {
    return (
        <div>
            <CallToActionButton />
            <Typography variant="title-h1" asChild>
                <h1>Welcome to the GlobalX</h1>
            </Typography>
            <Typography variant="title-h2" asChild>
                <h2>Your Gateway to Innovative Financial Solutions</h2>
            </Typography>
        </div>
    );
};

export default Home;
