import Layout from '@/components/layout';
import Button from '@/components/button';
import TagPill from '@/components/TagPill';

const techSkills = [
  'TypeScript', 'JavaScript (ES2015+)', 'React', 'Next.js', 'Redux', 'XState', 'Jotai',
  'HTML5', 'CSS3', 'Tailwind CSS', 'SCSS', 'Material UI', 'React Aria', 'ShadCN',
  'Accessibility (ARIA, WCAG)', 'Performance Optimization', 'Google Lighthouse', 'Storybook',
  'Jest', 'Cypress', 'ProseMirror', 'SQLite', 'Prisma', 'REST APIs', 'GraphQL', 'Tauri',
  'Vue.js', 'Angular', 'jQuery', 'npm', 'Yarn', 'Vite', 'Webpack', 'Monorepo Tooling (nx)',
  'Github Actions', 'CI/CD', 'ESLint', 'Prettier',
];

const Resume = (): JSX.Element => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/william-h-carter-sr-frontend-engineer.pdf';
    link.download = 'william-h-carter-sr-frontend-engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout
      title="Will Carter - Resume"
      description="Resume of Will Carter - Senior Frontend Engineer"
      narrowContainer
    >
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-4xl font-heading font-bold">Resume</h1>
        <Button onClick={handleDownload}>Download PDF</Button>
      </div>

      <div className="resume-content">
        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-heading font-bold mb-4">Summary</h2>
          <p className="text-lg leading-relaxed">
            Senior Frontend Engineer with over 10 years experience in building SaaS products. Strong passion for functional
            UI/UX, clean design, and optimizing for performance and accessibility.
          </p>
        </section>

        {/* Tech */}
        <section className="mb-8">
          <h2 className="text-2xl font-heading font-bold mb-4">Tech</h2>
          <div className="flex flex-wrap gap-2">
            {techSkills.map(skill => (
              <TagPill key={skill}>{skill}</TagPill>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-heading font-bold mb-4">Work Experience</h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-heading">Senior Frontend Engineer, Moment Technologies</h3>
              <span className="text-sm text-fg-3 whitespace-nowrap ml-4">May 2025 - Present</span>
            </div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Developed greenfield Next.js application that allows users to publish docs on the web with custom templates and mobile optimization.</li>
              <li>Developed a document sharing feature which allowed the product to be monetized by creating paid user workspaces and live collaboration on docs.</li>
              <li>Improved product load times from 10-15 seconds to under 5 seconds by migrating the frontend state management from XState to Jotai and prioritizing async operations.</li>
              <li>Built a design system utilizing react-aria components as a base to reduce UI bugs and improve feature launch time which enabled the team to ship new features weekly.</li>
              <li>Improved overall product stability, performance, and security by finding, testing, and resolving platform-level bugs across the product.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-heading">Senior Frontend Engineer, AS Software</h3>
              <span className="text-sm text-fg-3 whitespace-nowrap ml-4">Mar 2023 - May 2025</span>
            </div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Architected a new product allowing users to securely save and share ultrasound images throughout their pregnancy enabling $15mm in sales for new clients.</li>
              <li>Migrated many unsecure, slow performing, and unstable features of the product to improve user experience, code maintainability, and speed optimization decreasing build, load, and deployment times by 30-40%.</li>
              <li>Implemented comprehensive testing practices across the products including CI/CD automation, visual regression, accessibility, and E2E testing reducing regressions and ensuring product quality on every release.</li>
              <li>Modernized the frontend tooling including implementing NPM, Github Actions, ESLint, and Prettier in order to support faster development and FDA compliance.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-heading">Senior Frontend Engineer, Mythical Games</h3>
              <span className="text-sm text-fg-3 whitespace-nowrap ml-4">Apr 2022 - Nov 2022</span>
            </div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Developed a multi-tenant website platform that hosted all games supported with a design system, URL based middleware to hydrate content, and ensuring responsive design which enabled customer onboarding to happen in a single day.</li>
              <li>Led and developed a new NFT Inventory feature by integrating blockchain metadata APIs, user authentication, and state management crucial to revenue from consumers.</li>
              <li>Worked closely with design, product, clients, and other stakeholders to optimize for performance, accessibility, and sales conversions.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-heading">Senior Frontend Developer, Intouch Solutions</h3>
              <span className="text-sm text-fg-3 whitespace-nowrap ml-4">Aug 2019 - Mar 2022</span>
            </div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Developed and maintained applications ensuring seamless functionality, FDA Compliance, and clean UI/UX representing $30mm in yearly client revenue.</li>
              <li>Spearheaded efforts to modernize technical standards including accessibility and the adoption of modern tools such as webpack to accelerate developer output.</li>
              <li>Consistently achieved Lighthouse scores above 90 in all categories for all client websites to improve user experiences and client satisfaction.</li>
            </ul>
          </div>
        </section>

        {/* Additional Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-4">Additional Work Experience</h2>
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-heading">Frontend Developer, The Branding Farm</h3>
              <span className="text-sm text-fg-3 whitespace-nowrap ml-4">Apr 2017 - Mar 2019</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-heading">Web Developer, Looking Design</h3>
              <span className="text-sm text-fg-3 whitespace-nowrap ml-4">Apr 2015 - Apr 2017</span>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-heading font-bold mb-4">Education</h2>
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-heading font-bold">General Assembly</h3>
                <p className="text-base">Full Stack Web Development Immersive</p>
              </div>
              <span className="text-sm text-fg-3 whitespace-nowrap ml-4">2014 - 2015</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-heading font-bold">California State University, Chico</h3>
                <p className="text-base">BA, Communication Design</p>
                <p className="text-base">Minor, Photography</p>
              </div>
              <span className="text-sm text-fg-3 whitespace-nowrap ml-4">2006 - 2011</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resume;
