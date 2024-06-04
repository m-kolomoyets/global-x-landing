import Typography from '@/ui/Typography';
import CallToActionButton from './components/CallToActionButton';
import Link from '@/ui/Link';
import { Link as RouterLink } from '@tanstack/react-router';

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

            <Link asChild>
                <a href="https://google.com">Hello</a>
            </Link>
            <Link asChild>
                <RouterLink to="/">Hello 2</RouterLink>
            </Link>
        </div>
    );
};

export default Home;
