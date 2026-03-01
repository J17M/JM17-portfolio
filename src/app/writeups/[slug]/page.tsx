import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Link from 'next/link';
import { WRITEUPS, getWriteupBySlug } from '@/data/writeups';
import ScrollToTop from '@/app/components/ScrollToTop';
import 'highlight.js/styles/github-dark.css';

const CONTENT_DIR = path.join(process.cwd(), 'src/content');

function getPostContent(contentFile: string): string | null {
  const filePath = path.join(CONTENT_DIR, contentFile);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

export function generateStaticParams() {
  return WRITEUPS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writeup = getWriteupBySlug(slug);
  if (!writeup) return {};
  return {
    title: `${writeup.title} | phishforvulns`,
    description: writeup.description,
  };
}

export default async function WriteupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writeup = getWriteupBySlug(slug);
  if (!writeup) notFound();

  const content =
    writeup.contentFile && getPostContent(writeup.contentFile);

  return (
    <div className="blog-layout">
      <ScrollToTop />
      <main className="blog-feed">
        <Link href="/writeups" className="back-link">
          ← Back to Feed
        </Link>

        {content ? (
          <article className="markdown-article">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {content}
            </ReactMarkdown>
          </article>
        ) : (
          <article className="markdown-article">
            <div className="coming-soon">
              <h1>{writeup.title}</h1>
              <p>This writeup is coming soon. Check back later.</p>
            </div>
          </article>
        )}
      </main>
    </div>
  );
}
