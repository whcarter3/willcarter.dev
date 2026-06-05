# Handoff: Will Carter Design System

## Overview
A high-fidelity, interactive recreation of the **willcarter.dev** portfolio site. This is a click-through prototype built in React 18 + HTML/CSS that demonstrates the full visual system, component interactions, and user flows for Will Carter's personal brand and blog platform.

The prototype includes a light mode (Daybreak) and dark mode (Nightfall) with theme persistence, a featured blog system with filtering, and the signature cursor-following gradient effect that defines the brand.

## About the Design Files
These files are **design references created in HTML** — a working prototype showing intended look, behavior, and interactions. The task is to **recreate these designs in your target codebase** (Next.js, Vue, native, etc.) using your existing patterns, libraries, and architecture — **not** to ship these HTML files directly.

## Fidelity
**High-fidelity (hifi)**: These are pixel-perfect mockups with final colors, typography, spacing, animations, and all interactive states. Recreate the UI exactly as shown using your codebase's existing design system, component libraries, and styling approach.

---

## Key Files & Responsibilities

| File | What It Does |
|---|---|
| `index.html` | App entry point; loads React, Babel, CSS tokens, and all component scripts |
| `useGradient.jsx` | **The brand signature** — cursor-following radial gradient hook + `GradientButton`, `GradientSurface`, `useTheme` |
| `components.jsx` | Navigation, footer, logo, theme toggle, social icons |
| `pages.jsx` | Home (hero + typewriter), About (endorsements), Resume, Contact |
| `blog.jsx` | Blog index (featured card + filterable list), individual post reader |
| `data.jsx` | Sample blog post data and featured article body |
| `icons.jsx` | Inline SVG icon set (Font Awesome equivalents) |
| `app.jsx` | App shell, route state management, layout orchestration |
| `kit.css` | All component cosmetics (built on token layer) |
| `../../colors_and_type.css` | Design tokens: colors, typography scale, spacing, shadows, transitions |

---

## Core Design System

### Design Tokens (from `colors_and_type.css`)
- **Typography**: Monospace headings (code-forward voice), sans-serif body text
- **Colors**: Full light/dark theme support with CSS custom properties
  - Foreground: `--fg-1` (primary), `--fg-2` (secondary), `--fg-3` (tertiary)
  - Background: `--bg-1` (main), `--bg-2` (card), `--bg-3` (hover)
  - Accents: mood-based gradients in both themes
  - Borders: `--border-1`, `--border-2` with subtle opacity
- **Spacing**: Defined via CSS variables (padding, gap, margin scale)
- **Shadows**: Multiple levels: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-glow`
- **Transitions**: `--dur` (standard), `--dur-fast` (quick), `--ease` (easing function)
- **Border radius**: `--radius-sm`, `--radius-md`, `--radius-pill`

### The Signature Gradient
The cursor-following sunburst is **the brand's hallmark**:
- **Daybreak**: `#FFF1A6` → `#FFDD4A` (30%) → `#FE9000` (72%) → `#F2660F` (yellow→orange)
- **Nightfall**: `#FFC24B` → `#FF6B4A` (45%) → `#C2468B` (78%) → `#6A3FA0` (gold→coral→magenta→dusk)

Applied via:
- `useGradient()` hook: returns `[gradientString, handlers, ref]`
- Spread `handlers` onto elements and attach `ref`
- Set element `background` to the gradient string
- Hook re-calculates on `onMouseMove` and `onTouchMove`

---

## Screens & Flows

### Home Page
**Purpose**: Full-bleed hero introducing Will with animated typewriter effect  
**Layout**: Centered, full viewport (min-height: 100vh)  
**Content**:
- Headline: "Hello! My name is Will Carter" with clickable underlined links to About & Contact
- Typewriter animation cycles through phrases (roles/identities)
- Background: Cursor-following gradient (Daybreak bright sunburst / Nightfall sunset)
- Navigation is transparent, allowing hero to be the visual focus

**Interactions**:
- Cursor movement triggers gradient recalculation
- Links are underlined (`.ulink` class) with hover text-shadow
- Theme toggle persists preference to localStorage

### Blog Index Page
**Purpose**: Featured post + filterable list of articles  
**Layout**: Container (max-width 1100px), featured card + grid below  
**Sections**:
1. **Header** (eyebrow "The Blog", h1 "Notes & nonsense", subtitle)
2. **Featured Card** (full-width 2-column: text + gradient image)
   - Title, category kicker, excerpt, tags, date + reading time
   - Image area shows code icon on gradient background
   - Click navigates to post reader
3. **Filter Buttons** (All / Tech / Family / Hobbies)
4. **Blog Grid** (rows of posts)
   - Each row: date (left, mono, secondary color) + content (right)
   - Title, excerpt, tags + reading time
   - Hover: background lightens, title turns accent color
   - Click navigates to post

**Component Details**:
- `TagPill`: Inline tag; `.tag-sun` variant has gradient background + white text
- `FeaturedCard`: Uses `useGradient` for image background
- `BlogIndexPage`: State for filter, conditional rendering of featured post

### Blog Post Reader
**Purpose**: Display full article with metadata  
**Layout**: Narrow container (max-width 720px) with comfortable line length  
**Sections**:
1. **Back button** (ghost style, left arrow icon)
2. **Metadata** (category eyebrow, h1 title, date + reading time)
3. **Tags** (post-specific + category)
4. **Article body** (long-form typography)
   - Rendered via `ArticleBlock` component (supports p, h2, h3, blockquote, pre/code)
   - Generous line-height, font-size bumped up for readability
5. **Author card** (gradient background, avatar + bio)

**Typography Details**:
- `h2`: 2xl, margin 1.6em top / 0.5em bottom
- `h3`: xl, margin 1.4em top / 0.4em bottom
- Blockquotes: italic, left-border accent, secondary color
- Code: monospace, inline code has background + accent color
- Pre blocks: darker background, full-width overflow, mono font

### About Page
**Purpose**: Bio + endorsements  
**Layout**: 2-column grid on desktop (image + text), stacks on mobile  
**Sections**:
1. **Image + Bio text** (image on left, ~33% width; bio on right, ~60% width)
2. **Endorsements** (h2 section title, grid of 3 cards)
   - Each card has gradient background (`card-sun`), avatar, name + LinkedIn icon, quote
   - Cards alternate left/right layout (`.reverse` on odd ones)
   - Uses `useGradient` for hover effect

### Resume Page
**Purpose**: Summary, tech stack, work history  
**Layout**: Narrow container (max-width 720px)  
**Sections**:
1. **Header** (h1 + download button on right)
2. **Summary** (2-3 sentences)
3. **Tech** (inline tags of skills)
4. **Work Experience**
   - Each job: h3 (role + company), date on right, bulleted points below
   - Secondary color for points

### Contact Page
**Purpose**: Contact form with success state  
**Layout**: Narrow container  
**Content**:
- Headline: "Say hello"
- Subheading: "Got a cool idea, a question, or just want to talk disc golf? Drop me a line."
- Form (name, email, message) with gradient submit button
- On submit: reveals success message card with gradient background

---

## Components (Reusable)

### `GradientButton`
Button that paints the sunburst under the cursor.
```
<GradientButton size="lg">Download PDF</GradientButton>
```
- Props: `children`, `className`, `size` (defaults to base; "lg" for larger)
- Spreads all handler/ref props automatically

### `GradientSurface`
Any surface (div, section, footer) whose sunburst follows pointer.
```
<GradientSurface baseClass="footer" as="footer">
  {children}
</GradientSurface>
```
- Props: `as` (default "div"), `baseClass`, `className`, `children`, `style`, any other props
- Spreads gradient handlers automatically

### `useTheme()`
Returns `[theme, toggle]`. Reads/writes localStorage, sets `data-theme` attribute on root.
```
const [theme, toggle] = useTheme();
// theme is 'dark' or 'light'
// toggle() switches it
```

### `useGradient()`
Returns `[gradientString, handlers, ref]`.
```
const [gradient, handlers, ref] = useGradient();
return <div ref={ref} {...handlers} style={{ background: gradient }}>...</div>;
```
- `handlers`: `{ onMouseMove, onTouchMove }`
- Gradient string is empty until first interaction

### Other Components
- **Logo**: Image-based, clickable, links to home
- **ThemeToggle**: Sun/moon icon button, reads `window.__wcTheme` for current theme
- **Nav**: Sticky header with hamburger menu, transparent on home, gradient elsewhere
- **Footer**: Social links (GitHub, LinkedIn, CodePen, Email)
- **Icon**: Inline SVG renderer (24 predefined icons from Font Awesome)
- **Typewriter**: Animated text that cycles through phrases, types/deletes

---

## Interactions & Behavior

### Theme Toggle
- Button in nav top-right (sun/moon icon)
- Persists to localStorage (`wc-theme`)
- Defaults to OS preference (`prefers-color-scheme`)
- Sets `data-theme="dark"` or `"light"` on `<html>`
- CSS variables resolve based on `data-theme`
- Gradient colors update automatically

### Navigation
- Hash-based routing (no actual URLs; state-managed)
- Hamburger menu on mobile (always shown; toggles panel)
- Menu panel slides in from top-right, closes on ESC
- Active page highlighted with dot indicator
- On home, nav is transparent; elsewhere it carries the gradient

### Blog Filtering
- 4 buttons: All, Tech, Family, Hobbies
- Clicking updates filter state
- Featured post only shown when filter is "All"
- List re-renders filtered posts
- No featured post animation on filtered views

### Gradient Behavior
- Calculated on `mousemove` and `touchmove`
- Center point is cursor position relative to element's bounding rect
- Gradient stops shift with theme change (no re-render needed; CSS variables)
- Touch support: uses first touch point
- Gradient string is empty if element has no ref or rect (graceful fallback)

### Form Submission
- Contact form prevents default, sets `sent` state to true
- Success message appears with fade-in animation
- No actual email sent (placeholder behavior)

---

## State Management

### App-Level State
- **route** (string): current page ('home', 'blog', 'post', etc.)
- **postId** (string or null): which post is being read
- **theme** (string): 'dark' or 'light', persisted + system preference aware

### Page-Level State
- **BlogIndexPage**: `filter` (string, one of 4 category options)
- **ContactPage**: `sent` (boolean, triggers success message)
- **Nav**: `open` (boolean, menu panel visibility)

### Derived State
- Gradient is computed on-the-fly in `useGradient` hook (not stored)

---

## Design Details & Polish

### Typography
- **Headings**: Monospace, uppercase letters, code-forward voice
- **Body**: Relaxed line-height (1.6–1.75), generous letter-spacing
- **Meta**: Monospace, secondary color for dates, reading times, tags
- **Long-form**: Font size bumped to 18–20px for article text; line-height 1.75+

### Shadows
- **Cards**: `--shadow-sm` (subtle)
- **Buttons/Nav**: `--shadow-md` (medium, lift effect)
- **Hover state**: `--shadow-lg` (deeper)
- **Glow**: `--shadow-glow` (on button hover, subtle radiance)

### Borders
- **Cards**: 1px solid border (--border-2) with subtle color shift on hover
- **Forms**: 1px border, focus gives blue shadow + border color change
- **Blockquotes**: 4px left border in accent color

### Animations
- **Fade-in**: `.fade-in` class (0.5s, applies on page load)
- **Transitions**: Colors, shadows, transforms all 300–400ms (--dur)
- **Cursor-follow**: Gradient recalculates immediately (no transition)
- **Typewriter**: Letter-by-letter typing effect, ~45ms per char
- **Reduced motion**: All animations disabled if user prefers

### Hover States
- **Buttons**: Deeper shadow + transform scale (0.99)
- **Cards**: Translate up 3px, deeper border color
- **Links**: Text shadow (subtle drop shadow)
- **Icons**: Slight drop shadow + lift effect

### Mobile Responsive
- **Breakpoint**: 760px
- **Feature card**: Stacks to single column, image moves above text
- **Post row**: Stacks to single column, removes date column
- **Nav**: Always hamburger (no desktop full nav shown)

---

## Assets & Images

- **Logo**: `assets/logo-square.png` (Will's logo)
- **Avatar**: `assets/me-square.jpeg` (Will's headshot)
- **Endorsement images**: `assets/gabePerez.jpeg`, `assets/treyWhitson.jpeg`, `assets/tomBoatman.jpeg`

These are referenced in HTML src attributes. Ensure they are available in your codebase.

---

## Notes for Implementation

1. **No hard-coded URLs**: Navigation is hash-based and state-driven. Adapt to your router (Next.js Link, React Router, etc.).
2. **Icons**: Font Awesome 6 is used in the live site. This prototype substitutes inline SVG. For production, either use the SVG approach or integrate a real icon library.
3. **Blog content**: Sample post data in `data.jsx` is illustrative. Replace with your real content structure / data fetching.
4. **Featured article body**: Stored as a simple array of block objects (`{ t, c }`). For production, use a real markdown/rich-text renderer.
5. **Theme persistence**: Already handled via localStorage. Ensure your implementation respects the `data-theme` attribute for CSS variable resolution.
6. **Accessibility**: Focus states, ARIA labels, keyboard navigation (ESC to close menu), semantic HTML. Maintain these when porting.
7. **Email form**: Currently a no-op. Integrate your email service (Formspree, SendGrid, etc.) when implementing.

---

## Fidelity Checklist

When recreating in your codebase, ensure:

- [ ] Gradient colors match exactly (hex values provided above)
- [ ] Typography scale, weights, and monospace usage match
- [ ] Spacing (padding, gap, margin) is pixel-accurate
- [ ] Shadows match (CSS variable values copied)
- [ ] Border radius values are exact
- [ ] Hover/active states feel identical
- [ ] Animations and transitions have correct duration/easing
- [ ] Dark mode (Nightfall) is a complete inversion, not just inverted colors
- [ ] Theme toggle persists to localStorage
- [ ] Mobile breakpoint behavior matches
- [ ] All pages are clickable and routable
- [ ] Cursor-following gradient works on all applicable surfaces
- [ ] Form validation (email field) works
- [ ] Success message appears on contact form submit
- [ ] Blog filtering works and featured post appears only on "All"

---

## Questions?

Refer to the component file headers (each has a comment block explaining its purpose). The CSS is well-commented, and design tokens are defined clearly in the linked `colors_and_type.css` file.
