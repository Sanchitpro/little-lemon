// src/pages/HomePage.js
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';

function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <Testimonials />
      <AboutSection />
    </>
  );
}

export default HomePage;
