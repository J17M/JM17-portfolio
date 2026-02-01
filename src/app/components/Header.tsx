'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`pageHeader ${scrolled ? 'scrolled' : ''}`}>
      <div className="header">
        <a 
          onClick={() => scrollToSection('home')} 
          className={`site-title ${activeSection === 'home' ? 'active-logo' : ''}`}
        >
          Juan Monarrez-Gonzalez
        </a>

        <nav className="nav">
          <ul className="nav-header-list">
            <li>
              <a 
                onClick={() => scrollToSection('about')} 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                About
              </a>
            </li>
            <li>
              <a 
                onClick={() => scrollToSection('education')} 
                className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                onClick={() => scrollToSection('certifications')} 
                className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
              >
                Qualifications
              </a>
            </li>
            <li>
              <a 
                onClick={() => scrollToSection('writeups')} 
                className={`nav-link ${activeSection === 'writeups' ? 'active' : ''}`}
              >
                Writeups
              </a>
            </li>
            <li>
              <a 
                onClick={() => scrollToSection('contact')} 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}