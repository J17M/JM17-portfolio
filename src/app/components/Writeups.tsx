'use client';

import { useEffect, useRef } from 'react'; 
import Link from 'next/link'; 
import { getFeaturedWriteups } from '@/data/writeups';

const writeupsData = getFeaturedWriteups();

export default function Writeups() {
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
      { root: null, rootMargin: '-10% 0px -10% 0px', threshold: 0 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="writeups" className="content" ref={sectionRef}>
      <div className="writeups-container">
        
        <div className="section-header">
          <h2>Writeups</h2>
          <Link href="/writeups" className="view-all-link">
            View All <span>→</span>
          </Link>
        </div>
        
        <div className="writeups-grid">
          {writeupsData.map((post, index) => (
            <Link key={post.slug} href={`/writeups/${post.slug}`} className="writeup-card">
              <div className="writeup-header">
                <span className="writeup-platform">{post.platform}</span>
                <span className="writeup-date">{post.date}</span>
              </div>
              
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              
              <div className="writeup-tags">
                {post.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="read-more">
                Read Article <span>→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}