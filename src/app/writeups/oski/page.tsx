import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Link from 'next/link';
import 'highlight.js/styles/github-dark.css';

function getPostContent() {
  const folder = path.join(process.cwd(), 'src/content');
  const file = path.join(folder, 'oski-analysis.md'); 
  const content = fs.readFileSync(file, 'utf8');
  return content;
}

export default function OskiPage() {
  const content = getPostContent();

  return (
    <div className="blog-layout">
      <main className="blog-feed">
        <Link href="/writeups" className="back-link">
          ← Back to Feed
        </Link>

        <article className="markdown-article">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}