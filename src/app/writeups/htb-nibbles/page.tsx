import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Link from 'next/link';
import 'highlight.js/styles/github-dark.css'; 

// Helper function to read the file
function getPostContent() {
  const folder = path.join(process.cwd(), 'src/content');
  const file = path.join(folder, 'htb-nibbles.md');
  const content = fs.readFileSync(file, 'utf8');
  return content;
}

export default function NibblesPage() {
  const content = getPostContent();

  return (
    <div className="blog-layout">

      <aside className="blog-sidebar">
        <div className="sidebar-content">
          <Link href="/writeups" className="back-link">← Back to Feed</Link>
          
          <div className="profile-section">
            <img src="/assets/profile.jpg" alt="Profile" className="blog-profile-pic" />
            <h1 className="blog-name">Juan Monarrez</h1>
          </div>

          <div className="toc-section">
             <h3>Contents</h3>

             <ul className="toc-list">
                <li>Reconnaissance</li>
                <li>Web Enumeration</li>
                <li>Exploitation</li>
                <li>Privilege Escalation</li>
             </ul>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="blog-feed">
        <article className="markdown-article">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}