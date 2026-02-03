import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Qualifications from './components/Qualifications'; 
import Writeups from './components/Writeups'; 
import Contact from './components/Contact'; 

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Qualifications /> 
        <Writeups /> 
        <Contact />
      </main>
    </>
  );
}