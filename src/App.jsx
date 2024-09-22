import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import SectionMulti from './components/sectionMulti/SectionMulti';
import Section from './components/section/Section';
import Pricing from './components/pricing/Pricing';
import Footer from './components/footer/Footer';
import './app.scss';

const App = () => {
    return (
        <div className='app'>
            <div className='app__container'>
                <Navbar />
                <Hero />
                <SectionMulti />
                <Section />
            </div>
            <Pricing />
            <Footer />
        </div>
    );
};

export default App;

// design: https://www.figma.com/community/file/849342658995967505
