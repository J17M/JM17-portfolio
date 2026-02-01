'use client';

import { useEffect, useRef } from 'react';

export default function Education() {
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
    <section id="education" className="content" ref={sectionRef}>
      <div>
        <h2>Education</h2>
        
        <div className="education-card">
          <div className="edu-header">
            <div className="edu-logo-container">
              <img 
                src="/assets/uw-logo.png" 
                alt="UW Madison Logo" 
                className="edu-logo"
              />
            </div>
            <div className="edu-info">
              <h3>
                <a 
                  href="https://www.wisc.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="school-link"
                >
                  University of Wisconsin—Madison
                </a>
              </h3>
              <p className="edu-degree">B.S. Computer Science & Data Science</p>
              <p className="edu-date">Expected Graduation: May 2028</p>
            </div>
          </div>

          <div className="edu-divider">
            <span>Relevant Courses</span>
          </div>

          <div className="course-grid">
            <div className="course-item">
              <h4>COMP SCI 577 - Intro to Algorithms (In Progress)</h4>
              <p>
                Analysis of efficient algorithms using greedy, divide-and-conquer, and dynamic programming. 
                Covers NP-completeness, space & time analysis.
              </p>
            </div>
            
            <div className="course-item">
              <h4>COMP SCI 537 - Intro to Operating Systems (In Progress)</h4>
              <p>
                Study of operating system architecture, process synchronization, concurrency, and thread 
                management. Covers memory management, process scheduling, and virtualization.
              </p>
            </div>

            <div className="course-item">
              <h4>MATH 435 - Cryptography (In Progress)</h4>
              <p>
                Study of cryptographic concepts such as ciphers, hash functions. Concepts include perfect 
                secrecy, digital signatures, and hardness assumptions.
              </p>
            </div>
            
            <div className="course-item">
              <h4>COMP SCI 400 - Programming II</h4>
              <p>
                Implementation of data structures (Graphs, Hash Tables, Red-Black Trees). Covers Git version 
                control, JUnit testing, and JavaFX UI development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}