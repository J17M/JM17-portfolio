'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-section');
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="content" ref={sectionRef}>
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a Computer Science and Data Science student at the University of Wisconsin-Madison. 
            My current academic focus centers on the low level understanding of computer systems through 
            courses in Machine Organization, Operating Systems, and Cryptography.
          </p>
          <p>
            My main interest is in cybersecurity with the goal of becoming a penetration tester. I am 
            currently building a defensive foundation through platforms like TryHackMe and LetsDefend, 
            where I simulate SOC operations to improve my ability to perform SIEM log analysis, digital 
            forensics, and email analysis.
          </p>
          <p>
            During my free time I like to participate in Capture the Flag (CTF) challenges as well as 
            learn offensive methodologies to exploit vulnerable machines.
          </p>
        </div>

        <div className="about-image">
          <img 
            src="/assets/profile.jpg" 
            alt="Juan Monarrez-Gonzalez"
          />
        </div>
      </div>
    </section>
  );
}