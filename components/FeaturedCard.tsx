import Link from 'next/link';
import TagPill from './TagPill';
import GradientSurface from './GradientSurface';
import { PostMetadata } from '@/lib/blog';
import { BsCode } from 'react-icons/bs';

interface FeaturedCardProps {
  post: PostMetadata;
}

export default function FeaturedCard({ post }: FeaturedCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="feature-card card mb-8 block">
      <div className="feature-body">
        <div className="kicker">{post.category}</div>
        <h2 className="post-row-title" style={{ fontSize: 'var(--text-2xl)', marginBottom: '12px' }}>
          {post.title}
        </h2>
        <p className="post-row-excerpt">{post.description}</p>
        <div className="post-tags" style={{ marginBottom: '16px' }}>
          <TagPill sun>{post.category}</TagPill>
          {post.tags.slice(0, 3).map(tag => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
        <div className="post-date" style={{ paddingTop: 0 }}>
          {post.dateLabel} · {post.readingTime} read
        </div>
      </div>
      <GradientSurface baseClass="feature-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
        <BsCode style={{ color: 'var(--fg-on-sun)', opacity: 0.7 }} />
      </GradientSurface>
    </Link>
  );
}
