'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "HackTheBox: Nibbles Walkthrough",
    excerpt: "Easy rated Linux box showcasing basic enumeration tactics, web application exploitation, and identifying file misconfigurations to escalate user privileges",
    date: "July 16, 2025",
    readTime: "8 min read",
    tags: ["Walkthrough", "Web Exploitation", "Red Team"],
    image: "/assets/nibbles.png",
    slug: "/writeups/htb-nibbles"
  },
  {
    id: 2,
    title: "Deconstructing Oski Stealer: A Malware Analysis",
    excerpt: "Reverse engineering the Oski info-stealer. I break down the unpacking process, identify the C2 communication channels, and map the behavior to MITRE ATT&CK.",
    date: "Dec 05, 2025",
    readTime: "12 min read",
    tags: ["Malware Analysis", "Reverse Engineering", "Blue Team"],
    image: "/assets/oski-thumb.jpg",
    slug: "/writeups/oski-analysis"
  },
  {
    id: 3,
    title: "CTF Post-Mortem: UW-Stout 2025",
    excerpt: "We placed 7th! Here is a breakdown of the Cryptography challenges that stumped us, and the Python scripts we wrote to solve the OSINT category.",
    date: "Dec 20, 2025",
    readTime: "5 min read",
    tags: ["CTF", "Cryptography", "Python"],
    image: "/assets/ctf-thumb.jpg",
    slug: "/writeups/uw-stout-2025"
  }
];

export default function BlogHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All'); 
  const [showFilterMenu, setShowFilterMenu] = useState(false); 


  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set(articles.flatMap(article => article.tags));
    return ['All', ...Array.from(tags)];
  }, []);


  const filteredArticles = sortedArticles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTag = activeTag === 'All' || article.tags.includes(activeTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="blog-layout">
      
      <aside className="blog-sidebar">
        <div className="sidebar-content">
          <Link href="/" className="back-link">← Return to Portfolio</Link>
          
          <div className="profile-section">
            <img src="/assets/profile.jpg" alt="Profile" className="blog-profile-pic" />
            <h1 className="blog-name">Juan Monarrez</h1>
            <p className="blog-bio">
              Cybersecurity Student & CTF Player. Documenting my journey from "Script Kiddie" to Red Teamer.
            </p>
          </div>

          <div className="blog-socials">
            <a href="https://github.com/J17M" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/juanm17" target="_blank">LinkedIn</a>
            <a href="mailto:your.email@wisc.edu">Email</a>
          </div>
        </div>
      </aside>

      <main className="blog-feed">
        
        <div className="search-header">
          <div className="search-bar-container">
            
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search writeups..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="filter-wrapper">
              <button 
                className={`filter-btn ${activeTag !== 'All' ? 'active' : ''}`} 
                onClick={() => setShowFilterMenu(!showFilterMenu)}
              >
                Filter <span className="filter-arrow">▼</span>
              </button>

              {showFilterMenu && (
                <div className="filter-dropdown">
                  {allTags.map(tag => (
                    <button 
                      key={tag} 
                      className={`dropdown-item ${activeTag === tag ? 'selected' : ''}`}
                      onClick={() => {
                        setActiveTag(tag);
                        setShowFilterMenu(false);
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {activeTag !== 'All' && (
            <div className="active-filter-display">
              <span>Showing: <strong>{activeTag}</strong></span>
              <button onClick={() => setActiveTag('All')} className="clear-filter">✕</button>
            </div>
          )}
        </div>

        <div className="articles-list">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Link href={article.slug} key={article.id} className="article-card">
                
                <div className="article-content">
                  <div className="article-meta">
                    <span className="date">{article.date}</span>
                    <span className="dot">•</span>
                    <span className="read-time">{article.readTime}</span>
                  </div>
                  
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-excerpt">{article.excerpt}</p>
                  
                  <div className="article-tags">
                    {article.tags.map(tag => (
                      <span key={tag} className="mini-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="article-thumbnail">
                   <img src={article.image} alt={article.title} />
                </div>

              </Link>
            ))
          ) : (
            <div className="no-results">
              <p>No writeups found matching your criteria.</p>
              <button onClick={() => { setSearchQuery(''); setActiveTag('All'); }}>Clear All Filters</button>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}