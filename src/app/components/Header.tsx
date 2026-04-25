'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems: { id: string; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Qualifications' },
    { id: 'writeups', label: 'Writeups' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`pageHeader ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'header-menu-open' : ''}`}
    >
      <div className="header">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className={`site-title ${activeSection === 'home' ? 'active-logo' : ''}`}
        >
          Juan Monarrez-Gonzalez
        </button>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-menu-toggle-bar" aria-hidden />
          <span className="nav-menu-toggle-bar" aria-hidden />
          <span className="nav-menu-toggle-bar" aria-hidden />
        </button>

        <nav
          id="primary-navigation"
          className={`nav ${menuOpen ? 'nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="nav-header-list">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
