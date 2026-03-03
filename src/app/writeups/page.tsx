'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { WRITEUPS } from '@/data/writeups';

const articles = WRITEUPS.map((w) => ({
  id: w.slug,
  title: w.title,
  excerpt: w.description,
  date: w.date,
  platform: w.platform,
  tags: w.tags,
  image: w.image,
  slug: `/writeups/${w.slug}`,
}));

export default function BlogHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set(articles.flatMap((article) => article.tags));
    return ['All', ...Array.from(tags)];
  }, []);

  const filteredArticles = sortedArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = activeTag === 'All' || article.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="blog-layout">
      <aside className="blog-sidebar">
        <div className="sidebar-content">
          <Link href="/" className="back-link">
            ← Return to Portfolio
          </Link>

          <div className="profile-section">
            <img src="/assets/cyber-icon.png" alt="Profile" className="blog-profile-pic" />
            <h1 className="blog-name">phishforvulns</h1>
            <p className="blog-bio">
              Aspiring Red Teamer & CTF Player. Documenting my journey and sharing my knowledge along the way.
            </p>
          </div>

          <div className="blog-socials">
            <a href="https://github.com/J17M" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/juanm17" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:juan17monarrezg@gmail.com">Email</a>
          </div>
        </div>
      </aside>

      <main className="blog-feed">
        <h1 className="writeups-page-title">Writeups</h1>

        <div className="writeups-search-row">
          <input
            type="text"
            placeholder="Search writeups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search writeups by title or tag"
          />
          <span className="writeups-filter-label">Filter by tag</span>
        </div>

        <div className="writeups-pills">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`writeups-pill ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="writeups-result-count">
          {filteredArticles.length} writeup{filteredArticles.length !== 1 ? 's' : ''}
        </p>

        <div className="writeups-divider" />

        <div className="writeups-list">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Link href={article.slug} key={article.id} className="article-card">
                <div className="article-content">
                  <div className="article-card-meta">
                    <span className="article-platform">{article.platform}</span>
                    <span className="article-date-inline">{article.date}</span>
                  </div>

                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-excerpt">{article.excerpt}</p>

                  <div className="article-tags">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="mini-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="article-read-more">Read article →</span>
                </div>

                <div className="article-thumbnail">
                  <img src={article.image} alt={article.title} />
                </div>
              </Link>
            ))
          ) : (
            <div className="no-results">
              <p>No writeups found matching your criteria.</p>
              <button
                type="button"
                className="clear-filters-btn"
                onClick={() => {
                  setSearchQuery('');
                  setActiveTag('All');
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
