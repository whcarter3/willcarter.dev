/* ============================================================================
   App shell + tiny hash router. Mounts the whole interactive kit.
   ========================================================================== */

function App() {
  const themeState = useTheme();
  window.__wcTheme = themeState; // shared with ThemeToggle
  const [route, setRoute] = useState('home');
  const [postId, setPostId] = useState(null);

  const go = (r, id) => {
    setRoute(r);
    if (id) setPostId(id);
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  };

  const isHome = route === 'home';

  let page;
  if (route === 'home') page = <HomePage go={go} />;
  else if (route === 'about') page = <AboutPage />;
  else if (route === 'resume') page = <ResumePage />;
  else if (route === 'contact') page = <ContactPage />;
  else if (route === 'blog') page = <BlogIndexPage go={go} />;
  else if (route === 'post') page = <BlogPostPage id={postId} go={go} />;
  else page = <HomePage go={go} />;

  return (
    <div className="app">
      <Nav route={route === 'post' ? 'blog' : route} go={go} transparent={isHome} />
      <main className="main">
        {page}
      </main>
      {!isHome && <Footer />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
