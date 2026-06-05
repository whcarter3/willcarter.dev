import Link from 'next/link';
import TagPill from './TagPill';
import { PostMetadata } from '@/lib/blog';

interface PostRowProps {
  post: PostMetadata;
}

export default function PostRow({ post }: PostRowProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="post-row">
      <div className="post-date">{post.dateLabel}</div>
      <div>
        <div className="post-row-title">{post.title}</div>
        <p className="post-row-excerpt">{post.description}</p>
        <div className="post-tags">
          {post.category && post.category !== 'General' && (
            <TagPill sun>{post.category}</TagPill>
          )}
          {post.tags.slice(0, 3).map(tag => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
          <span className="tag" style={{ marginLeft: 'auto' }}>{post.readingTime} read</span>
        </div>
      </div>
    </Link>
  );
}
