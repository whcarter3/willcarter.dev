import PostRow from './PostRow';
import { PostMetadata } from '@/lib/blog';

interface BlogGridProps {
  posts: PostMetadata[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return <p className="py-12 text-center text-fg-3">No posts in this category yet.</p>;
  }
  return (
    <div className="blog-grid">
      {posts.map(post => (
        <PostRow key={post.slug} post={post} />
      ))}
    </div>
  );
}
