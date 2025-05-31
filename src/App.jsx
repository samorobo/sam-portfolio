import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

import CertificateMarquee from './sections/Certificate/Certificate';
import cert1 from '/cert1.jpeg';


const certificates = [
  { image: cert1, name: 'React Certificate' },
  { image: cert1, name: 'JavaScript Mastery' },
  { image: cert1, name: 'Frontend Developer' },
  
];


function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <CertificateMarquee certificates={certificates} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
