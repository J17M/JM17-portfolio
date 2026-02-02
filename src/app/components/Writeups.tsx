'use client';

import { useEffect, useRef } from 'react';


interface Writeup {
  title: string;
  description: string;
  date: string;
  platform: string; 
  tags: string[];
  link: string;
}


const writeupsData: Writeup[] = [
  {
    title: "HackTheBox: Nibbles Walkthrough",
    description: "Easy rated Linux box showcasing basic enumeration tactics, web application exploitation, and identifiying file misconfigurations to escalate user privileges",
    date: "July 2025",
    platform: "HackTheBox",
    tags: ["Web Exploitation", "Privilege Escalation", "File Misconfigurations", "Red Team"],
    link: "#" // Replace with real link later
  },
  {
    title: "7th Place in UW-Stout's Cyber CTF 2025",
    description: "Breakdown of UW-Stout's CTF challenges and key takeaways that came from such challenges",
    date: "Dec 2025",
    platform: "Competition",
    tags: ["CTF", "Reverse Engineering", "OSINT", "Cryptography"],
    link: "#"
  },
  {
    title: "CyberdDefenders: Oski Lab Writeup",
    description: "Analyzed an MD5 hash of a malicious file using sandbox reports. Extracted vital information and mapped identified behaviors to MITRE ATT&CK techniques.",
    date: "Dec 2025",
    platform: "CyberDefenders",
    tags: ["Malware Analysis", "Threat Intel", "Blue Team"],
    link: "#"
  }
];

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
      { root: null, rootMargin: '-30% 0px -30% 0px', threshold: 0 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="writeups" className="content" ref={sectionRef}>
      <div className="writeups-container">
        <h2>Writeups</h2>
        
        <div className="writeups-grid">
          {writeupsData.map((post, index) => (
            <a 
              key={index} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="writeup-card"
            >
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}