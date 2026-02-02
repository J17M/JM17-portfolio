import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import { Certifications, Contact } from './components/Sections';
import Writeups from './components/Writeups'; // Import the new component

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Writeups /> 
        <Contact />
      </main>
    </>
  );
}