'use client';

import { useEffect, useRef } from 'react';


interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiration?: string;
  image: string;
  link?: string;        
  skills: string[];
  status: 'completed' | 'in-progress'; 
  imageBg?: string; 
}

interface Training {
  platform: string;
  role: string;
  description: string;
  link: string;
  image: string;
}


const certsData: Certification[] = [
  {
    name: "CompTIA CySA+",
    issuer: "CompTIA",
    date: "Issued February 2025",
    image: "/assets/cysa.png",
    link: "https://www.credly.com/badges/87663d4d-a313-4ece-bd2f-b389a98b2325/public_url",
    skills: ["Threat Hunting", "Log Analysis", "Incident Response"],
    status: 'completed'
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Issued June 2024",
    expiration: "Expires June 2027",
    image: "/assets/sec.png",
    link: "https://www.credly.com/badges/470366cf-cfb3-40b1-945c-992030059b9c/",
    skills: ["Threat Detection", "Network Security", "Disaster Recovery"],
    status: 'completed'
  },
  {
    name: "GFACT",
    issuer: "GIAC",
    date: "Issued March 2024",
    expiration: "Expires March 2028",
    image: "/assets/gfact.png",
    link: "https://www.credly.com/badges/16f8de2d-d328-41c6-81e7-8b5608df49e6",
    skills: ["Linux Fundamentals", "Python Scripting", "Exploitation"],
    status: 'completed'
  },
  {
    name: "Cisco CCNA",
    issuer: "Cisco",
    date: "Est. Completion: June 2026",
    image: "/assets/ccna.png",
    skills: ["IP Routing", "Network Fundamentals", "Network Access"],
    status: 'in-progress',
    imageBg: '#ffffff'
  }
];

const trainingData: Training[] = [
  {
    platform: "TryHackMe",
    role: "Top 2% [0xC][GURU]",
    description: "Completed 150+ rooms & actively keeping streak",
    link: "https://tryhackme.com/p/JM17",
    image: "/assets/thm.png"
  },
  {
    platform: "TCM Security",
    role: "Course Completion",
    description: "Completed Practical Ethical Hacker (PEH), OSINT FUndamentals, & External Pentest Playbook",
    link: "https://academy.tcm-sec.com/",
    image: "/assets/tcm.png"
  },
  {
    platform: "National Cyber League",
    role: "Diamond 2 Achievement",
    description: "Placed 47th out of 691+ competitors (experienced students bracket). Strengths in Cryptography, Forensics, & OSINT.",
    link: "https://cyberskyline.com/report/6AENQTRP3KFT",
    image: "/assets/ncl.png"
  }
];

export default function Qualifications() {
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
    <section id="certifications" className="content" ref={sectionRef}>
      <div className="qualifications-container">
        
        <h2>Professional Certifications</h2>
        
        <div className="certs-grid">
          {certsData.map((cert, index) => (
            <div key={index} className={`cert-card ${cert.status === 'in-progress' ? 'in-progress-card' : ''}`}>
              
              
              <div 
                className="cert-image-container"
                style={cert.imageBg ? { background: cert.imageBg } : {}}
              >
                <img src={cert.image} alt={cert.name} className="cert-img" />
              </div>
              
              <div className="cert-details">
                <div className="cert-header-row">
                  <span className="issuer">{cert.issuer}</span>
                  {cert.status === 'in-progress' && (
                    <span className="status-badge">In Progress</span>
                  )}
                </div>
                
                <h3>{cert.name}</h3>
                
                <div className="cert-meta">
                  <span>{cert.date}</span>
                  {cert.expiration && <span className="separator">•</span>}
                  {cert.expiration && <span>{cert.expiration}</span>}
                </div>

                <div className="cert-skills">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="skill-pill">{skill}</span>
                  ))}
                </div>

                
                {cert.status === 'completed' && cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="verify-btn">
                    Verify on Credly ↗
                  </a>
                ) : (
                  <span className="verify-btn disabled">
                    Soon...
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="training-title">Training</h2>
        <div className="training-grid">
          {trainingData.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="training-card">
              <div className="training-header">
                <img src={item.image} alt={item.platform} className="training-icon" />
                <div className="training-title-box">
                  <h4>{item.platform}</h4>
                  <span className="training-role">{item.role}</span>
                </div>
              </div>
              <p>{item.description}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}