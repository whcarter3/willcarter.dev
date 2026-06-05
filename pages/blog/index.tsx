import { useState } from 'react';
import Layout from '@/components/layout';
import FeaturedCard from '@/components/FeaturedCard';
import BlogGrid from '@/components/BlogGrid';
import { getAllPosts } from '@/lib/blog';
import type { PostMetadata } from '@/lib/blog';
import classNames from 'classnames';

interface BlogIndexProps {
  posts: PostMetadata[];
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const featuredPost = posts.find(p => p.featured);
  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category))).sort()];

  const filteredPosts = activeFilter === 'All'
    ? posts.filter(p => !p.featured)
    : posts.filter(p => p.category === activeFilter);

  return (
    <Layout title="Blog - Will Carter" description="Articles and thoughts on software development">
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-4xl font-heading">Blog</h1>
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={classNames('tag', activeFilter === cat && 'tag-sun')}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {activeFilter === 'All' && featuredPost && (
        <FeaturedCard post={featuredPost} />
      )}

      <BlogGrid posts={filteredPosts} />
    </Layout>
  );
}
