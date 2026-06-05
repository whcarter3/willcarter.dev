/* ============================================================================
   Pages: Home (hero), About, Resume, Contact.
   ========================================================================== */

/* --- Typewriter, faithful to the home page's react-type-animation line --- */
function Typewriter({ phrases, speed = 45, pause = 1400 }) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = phrases[i % phrases.length];
    let timer;
    if (!del && text === full) {
      timer = setTimeout(() => setDel(true), pause);
    } else if (del && text === '') {
      setDel(false); setI((v) => v + 1);
    } else {
      timer = setTimeout(() => {
        setText(del ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }, del ? speed * 0.55 : speed);
    }
    return () => clearTimeout(timer);
  }, [text, del, i, phrases, speed, pause]);
  return (<span>{text}<span className="cursor-caret" aria-hidden="true">&nbsp;</span></span>);
}

function HomePage({ go }) {
  return (
    <GradientSurface baseClass="hero" as="section">
      <h1>
        <a href="#contact" className="ulink" onClick={(e) => { e.preventDefault(); go('contact'); }}>Hello!</a>{' '}
        My name is{' '}
        <a href="#about" className="ulink" onClick={(e) => { e.preventDefault(); go('about'); }}>Will Carter</a>,
        <br />
        <Typewriter phrases={[
          'and I am a Frontend engineer.',
          'and I am an accessibility advocate.',
          'and I am a father.',
          'and I am a disc golfer.',
          'and I am a Nintendo lover.',
          'and I am a perfexoinst.',
          'and I am a perfectionist.',
        ]} />
      </h1>
    </GradientSurface>
  );
}

/* --- About ---------------------------------------------------------------- */
const ENDORSEMENTS = [
  { name: 'Gabe Perez', img: '../../assets/gabePerez.jpeg',
    quote: 'Will made an immediate impact on our team from his very first day. He has an incredible ability to pick up new things fast and master them. His attention to detail and dedication were invaluable \u2014 he\u2019d be an asset to any team.' },
  { name: 'Trey Whitson', img: '../../assets/treyWhitson.jpeg', reverse: true,
    quote: 'Will is driven, knowledgeable, and has a true passion for what he does. He has a knack for communicating with both technical and non-technical colleagues. Not only an efficient contributor, but sincerely a great person to work with.' },
  { name: 'Tom Boatman', img: '../../assets/tomBoatman.jpeg',
    quote: 'His enthusiasm and creativity are most intoxicating. When faced with a problem, he seeks an ideal solution and pursues it relentlessly. His strongest talents are visual storytelling and an ability to connect with people.' },
];

function EndorsementCard({ name, img, quote, reverse }) {
  const [gradient, handlers, ref] = useGradient();
  return (
    <div ref={ref} {...handlers} className="card-sun"
      style={{ ...(gradient ? { background: gradient } : {}), display: 'flex', gap: 20, flexDirection: reverse ? 'row-reverse' : 'row', alignItems: 'flex-start' }}>
      <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: reverse ? 'flex-end' : 'flex-start', gap: 8 }}>
        <img src={img} alt={name} width="120" height="120" className="avatar" style={{ width: 120, height: 120, objectFit: 'cover' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <h3 style={{ fontSize: 'var(--text-lg)' }}>{name}</h3>
          <Icon name="linkedin" size={20} style={{ color: 'var(--fg-on-sun)' }} />
        </div>
      </div>
      <p style={{ margin: 0, lineHeight: 'var(--leading-normal)' }}>{quote}</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="container fade-in" style={{ paddingTop: 48, paddingBottom: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)', gap: 48, alignItems: 'start' }} className="about-grid">
        <img src="../../assets/me-square.jpeg" alt="Will Carter" className="avatar" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
        <div>
          <h1 style={{ fontSize: 'var(--text-4xl)', marginBottom: 16 }}>About me</h1>
          <p>I love building cool things that live on the internet. I love the feeling of telling someone to pull out their phone and look at something I built. I started messing around with HTML as a kid in the late 90s, then matured into customizing my Myspace profile with CSS in high school.</p>
          <p>After college I became a portrait photographer, then worked in social media for a music festival production company. Wanting a transition, I taught myself JavaScript and enrolled at General Assembly for the Full Stack Immersive in 2014.</p>
          <p>Fast forward a few years &mdash; I&rsquo;ve worked at small and large agencies, built platforms from the ground up, and had the joy of teaching others &mdash; all to achieve my goal of having someone look at what I&rsquo;ve built and say, &ldquo;how cool!&rdquo;</p>
          <p>Outside of my career, I&rsquo;m a dedicated father, husband, Nintendo lover, sour skittles addict, disc golfer, and fantasy football nerd. It&rsquo;s nice to meet you. Let&rsquo;s build something cool together!</p>
        </div>
      </div>
      <h2 className="section-title" style={{ marginTop: 56 }}>Endorsements</h2>
      <div style={{ display: 'grid', gap: 20, maxWidth: 800, margin: '0 auto' }}>
        {ENDORSEMENTS.map((e) => <EndorsementCard key={e.name} {...e} />)}
      </div>
    </div>
  );
}

/* --- Resume --------------------------------------------------------------- */
const RESUME_JOBS = [
  { role: 'Senior Frontend Engineer', org: 'Moment Technologies', when: 'May 2025 \u2013 Present',
    points: ['Built a greenfield Next.js app for publishing docs on the web with custom templates and mobile optimization.', 'Cut load times from 10\u201315s to under 5s by migrating state from XState to Jotai.', 'Built a design system on react-aria primitives, enabling weekly feature launches.'] },
  { role: 'Senior Frontend Engineer', org: 'AS Software', when: 'Mar 2023 \u2013 May 2025',
    points: ['Architected a product for securely sharing ultrasound images, enabling $15mm in sales.', 'Implemented CI/CD, visual regression, accessibility, and E2E testing for FDA compliance.'] },
  { role: 'Senior Frontend Engineer', org: 'Mythical Games', when: 'Apr 2022 \u2013 Nov 2022',
    points: ['Built a multi-tenant website platform with a shared design system; onboarding in a single day.', 'Led an NFT inventory feature integrating blockchain metadata APIs and auth.'] },
];

function ResumePage() {
  return (
    <div className="container container-narrow fade-in" style={{ paddingTop: 48, paddingBottom: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, gap: 16 }}>
        <h1 style={{ fontSize: 'var(--text-4xl)' }}>Resume</h1>
        <GradientButton><Icon name="download" size={18} /> Download PDF</GradientButton>
      </div>
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 10 }}>Summary</h2>
        <p style={{ fontSize: 'var(--text-lg)' }}>Senior Frontend Engineer with 10+ years building SaaS products. Strong passion for functional UI/UX, clean design, and optimizing for performance and accessibility.</p>
      </section>
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 12 }}>Tech</h2>
        <div className="post-tags">
          {['TypeScript', 'React', 'Next.js', 'Jotai', 'XState', 'Tailwind', 'react-aria', 'WCAG', 'Storybook', 'Jest', 'Cypress', 'GraphQL', 'Vite', 'nx'].map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 16 }}>Work Experience</h2>
        {RESUME_JOBS.map((j) => (
          <div key={j.org} style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: 'var(--text-xl)' }}>{j.role}, {j.org}</h3>
              <span className="meta" style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-3)', whiteSpace: 'nowrap' }}>{j.when}</span>
            </div>
            <ul style={{ margin: '8px 0 0', paddingLeft: 22, color: 'var(--fg-2)', lineHeight: 'var(--leading-normal)' }}>
              {j.points.map((p, k) => <li key={k} style={{ marginBottom: 4 }}>{p}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

/* --- Contact -------------------------------------------------------------- */
function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container container-narrow fade-in" style={{ paddingTop: 48, paddingBottom: 24 }}>
      <h1 style={{ fontSize: 'var(--text-4xl)', marginBottom: 8 }}>Say hello</h1>
      <p style={{ color: 'var(--fg-2)', marginBottom: 28 }}>Got a cool idea, a question, or just want to talk disc golf? Drop me a line.</p>
      {sent ? (
        <div className="card-sun fade-in"><p style={{ margin: 0, fontSize: 'var(--text-lg)' }}>Woohoo! Thanks for the mail! I&rsquo;ll get back to you soon.</p></div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label className="field">
            <span className="field-label">Full Name</span>
            <input className="input" required placeholder="Rick Astley" />
          </label>
          <label className="field">
            <span className="field-label">Email Address</span>
            <input className="input" type="email" required placeholder="bender@isgreat.com" />
          </label>
          <label className="field">
            <span className="field-label">Message</span>
            <textarea className="textarea" required placeholder="Let's build something cool together..."></textarea>
          </label>
          <GradientButton type="submit">Submit</GradientButton>
        </form>
      )}
    </div>
  );
}

Object.assign(window, { HomePage, AboutPage, ResumePage, ContactPage, Typewriter });
