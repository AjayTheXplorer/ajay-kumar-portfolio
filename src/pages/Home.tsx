import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Credibility from '../sections/Credibility';
import Journey from '../sections/Journey';
import FeaturedWork from '../sections/FeaturedWork';
import EngineeringStories from '../sections/EngineeringStories';
import TechnicalProfile from '../sections/TechnicalProfile';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';



function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Credibility />
        <Journey />
        <FeaturedWork />
        <EngineeringStories />
        <TechnicalProfile />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;