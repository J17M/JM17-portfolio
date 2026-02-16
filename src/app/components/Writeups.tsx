'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link'; 

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
    description: "Easy rated Linux box showcasing basic enumeration tactics, web application exploitation, and identifying file misconfigurations to escalate user privileges",
    date: "July 2025",
    platform: "HackTheBox",
    tags: ["Web Exploitation", "Privilege Escalation", "File Misconfigurations", "Red Team"],
    link: "/writeups/htb-nibbles" 
  },
  {
    title: "7th Place in UW-Stout's Cyber CTF 2025",
    description: "Breakdown of UW-Stout's CTF challenges and key takeaways that came from such challenges (WILL BE ADDED SOON)",
    date: "Dec 2025",
    platform: "Competition",
    tags: ["CTF", "Reverse Engineering", "OSINT", "Cryptography"],
    link: "/writeups/uw-stout-2025"
  },
  {
    title: "CyberDefenders: Oski Lab Writeup",
    description: "Analyzed an MD5 hash of a malicious file using sandbox reports. Extracted vital information and mapped identified behaviors to MITRE ATT&CK techniques. (WILL BE ADDED SOON)",
    date: "Dec 2025",
    platform: "CyberDefenders",
    tags: ["Malware Analysis", "Threat Intel", "Blue Team"],
    link: "/writeups/oski"
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
         
            <Link 
              key={index} 
              href={post.link} 
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
            
        
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}