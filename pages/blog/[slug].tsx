import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { BsArrowLeft } from 'react-icons/bs';
import Layout from '@/components/layout';
import TagPill from '@/components/TagPill';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import useGradient from '@/hooks/useGradient';

interface BlogPostProps {
  post: {
    slug: string;
    title: string;
    dateLabel: string;
    description: string;
    tags: string[];
    category: string;
    readingTime: string;
    image?: string;
    content: MDXRemoteSerializeResult;
  };
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      post: {
        slug: post.slug,
        title: post.title,
        dateLabel: post.dateLabel,
        description: post.description,
        tags: post.tags,
        category: post.category,
        readingTime: post.readingTime,
        image: post.image ?? null,
        content: mdxSource,
      },
    },
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  const [gradient, handlers, gradientRef] = useGradient<HTMLDivElement>();

  return (
    <Layout
      title={`${post.title} - Will Carter`}
      description={post.description}
      narrowContainer
    >
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-fg-3 hover:text-fg-1 mb-8 transition-colors">
        <BsArrowLeft />
        All posts
      </Link>

      <article>
        <header className="mb-8">
          <div className="post-tags mb-4">
            <TagPill sun>{post.category}</TagPill>
            {post.tags.slice(0, 4).map(tag => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>
          <h1 className="text-4xl font-heading mb-4">{post.title}</h1>
          <p className="text-fg-3">
            {post.dateLabel} · {post.readingTime} read
          </p>
          {post.image && (
            <img
              src={post.image}
              alt=""
              className="post-hero-img"
            />
          )}
        </header>

        <div className="article">
          <MDXRemote {...post.content} />
        </div>

        <footer className="mt-16 pt-8 border-t border-[var(--border-1)]">
          <div
            ref={gradientRef}
            className="author-card card-sun"
            style={gradient ? { background: gradient } : undefined}
            {...handlers}
          >
            <img src="/images/me-square.jpeg" alt="Will Carter" />
            <div className="author-info">
              <div className="author-name">Will Carter</div>
              <p className="author-bio">
                Senior Frontend Engineer. Writing about web development, accessibility, and the occasional homelab adventure.
              </p>
            </div>
          </div>
        </footer>
      </article>
    </Layout>
  );
}
