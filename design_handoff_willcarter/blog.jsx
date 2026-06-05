/* ============================================================================
   Blog: index (featured + list) and individual post reader.
   ========================================================================== */

function TagPill({ children, sun }) {
  return <span className={'tag' + (sun ? ' tag-sun' : '')}>{children}</span>;
}

function FeaturedCard({ post, go }) {
  const [gradient, handlers, ref] = useGradient();
  return (
    <article className="card feature-card fade-in" style={{ cursor: 'pointer', marginBottom: 40 }}
      onClick={() => go('post', post.id)}>
      <div className="feature-body">
        <div className="kicker">Featured · {post.category}</div>
        <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 12 }}>{post.title}</h2>
        <p style={{ color: 'var(--fg-2)', fontSize: 'var(--text-lg)', marginBottom: 18 }}>{post.excerpt}</p>
        <div className="post-tags" style={{ marginBottom: 20 }}>
          {post.tags.map((t) => <TagPill key={t}>{t}</TagPill>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>
          <span>{post.dateLabel}</span><span className="dot"></span><span>{post.readingTime} read</span>
        </div>
      </div>
      <div ref={ref} {...handlers} className="feature-img"
        style={{ background: gradient || 'var(--grad-mood-card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="code" size={88} stroke={1.5} style={{ color: 'var(--fg-on-sun)', opacity: 0.85 }} />
      </div>
    </article>
  );
}

function BlogIndexPage({ go }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Tech', 'Family', 'Hobbies'];
  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured && (filter === 'All' || p.category === filter));
  return (
    <div className="container fade-in" style={{ paddingTop: 48, paddingBottom: 24 }}>
      <header style={{ marginBottom: 28 }}>
        <div className="eyebrow">The Blog</div>
        <h1 style={{ fontSize: 'var(--text-4xl)', margin: '6px 0 10px' }}>Notes &amp; nonsense</h1>
        <p style={{ color: 'var(--fg-2)', fontSize: 'var(--text-lg)', maxWidth: 620 }}>
          Frontend craft, family life, and whatever else is rattling around. Some of it is code. Some of it is heart. All of it is mine.
        </p>
      </header>

      {filter === 'All' && featured && <FeaturedCard post={featured} go={go} />}

      <div style={{ display: 'flex', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
        {categories.map((c) => (
          <button key={c} onClick={() => setFilter(c)}
            className={'btn' + (filter === c ? '' : ' btn-ghost')}
            style={{ padding: '6px 16px', fontSize: 'var(--text-sm)' }}>
            {c}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {rest.map((p) => (
          <article key={p.id} className="post-row" style={{ cursor: 'pointer' }} onClick={() => go('post', p.id)}>
            <div className="post-date">{p.dateLabel}</div>
            <div>
              <h3 className="post-row-title">{p.title}</h3>
              <p className="post-row-excerpt">{p.excerpt}</p>
              <div className="post-tags">
                <TagPill sun>{p.category.toLowerCase()}</TagPill>
                {p.tags.map((t) => <TagPill key={t}>{t}</TagPill>)}
                <span className="meta" style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>{p.readingTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ArticleBlock({ block }) {
  if (block.t === 'p') return <p>{block.c}</p>;
  if (block.t === 'h2') return <h2>{block.c}</h2>;
  if (block.t === 'h3') return <h3>{block.c}</h3>;
  if (block.t === 'blockquote') return <blockquote>{block.c}</blockquote>;
  if (block.t === 'pre') return <pre><code>{block.c}</code></pre>;
  return null;
}

function BlogPostPage({ id, go }) {
  const post = POSTS.find((p) => p.id === id) || POSTS[0];
  const isFeatured = post.featured;
  return (
    <article className="container container-narrow fade-in" style={{ paddingTop: 48, paddingBottom: 24 }}>
      <button className="btn btn-ghost" style={{ padding: '6px 14px', fontSize: 'var(--text-sm)', marginBottom: 24 }}
        onClick={() => go('blog')}>
        <Icon name="arrowLeft" size={16} /> All posts
      </button>
      <div className="eyebrow">{post.category}</div>
      <h1 style={{ fontSize: 'var(--text-4xl)', margin: '8px 0 14px', lineHeight: 'var(--leading-tight)' }}>{post.title}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', marginBottom: 12 }}>
        <span>{post.dateLabel}</span><span className="dot"></span><span>{post.readingTime} read</span>
      </div>
      <div className="post-tags" style={{ marginBottom: 26 }}>
        {post.tags.map((t) => <TagPill key={t}>{t}</TagPill>)}
      </div>

      <div className="article">
        {isFeatured
          ? FEATURED_BODY.map((b, i) => <ArticleBlock key={i} block={b} />)
          : (
            <>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--fg-2)' }}>{post.excerpt}</p>
              <p>This is a sample post in the Will Carter design system. The full article would render here in comfortable, long-form type &mdash; Source Sans 3 at a relaxed line height, with monospace headings to keep the code-forward voice.</p>
              <blockquote>The reading column is capped near 720px so lines never run too long to track comfortably.</blockquote>
              <p>Swap this placeholder for your own writing. Headings, lists, blockquotes, inline <code>code</code>, and code blocks are all styled to match the brand.</p>
            </>
          )}
      </div>

      <hr style={{ border: 'none', borderTop: 'var(--border-width) solid var(--border-2)', margin: '40px 0 24px' }} />
      <div className="card-sun" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <img src="../../assets/me-square.jpeg" alt="Will Carter" className="avatar-round" style={{ width: 64, height: 64, objectFit: 'cover', flexShrink: 0 }} />
        <div>
          <strong style={{ fontFamily: 'var(--font-heading)' }}>Will Carter</strong>
          <p style={{ margin: '2px 0 0', fontSize: 'var(--text-sm)' }}>Senior Frontend Engineer in Kansas City. Father, disc golfer, perpetual tinkerer.</p>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { BlogIndexPage, BlogPostPage, TagPill });
