'use client';

import { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
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
    <section id={id} className="content" ref={sectionRef}>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" title="Qualifications">
      <p>Certifications and qualifications will be added here as they are earned.</p>
    </Section>
  );
}

export function Writeups() {
  return (
    <Section id="writeups" title="Writeups">
      <p>Coming Soon....</p>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p>Reach out via LinkedIn or Email.</p>
    </Section>
  );
}