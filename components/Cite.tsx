import { useState, useRef, useEffect } from 'react';

interface CiteProps {
  label: string;
  href: string;
  quote: string;
}

export default function Cite({ label, href, quote }: CiteProps) {
  const [visible, setVisible] = useState(false);
  const [above, setAbove] = useState(false);
  const pillRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (visible && pillRef.current) {
      const rect = pillRef.current.getBoundingClientRect();
      setAbove(rect.top > 200);
    }
  }, [visible]);

  return (
    <span className="cite-wrapper">
      <a
        ref={pillRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cite-pill"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        {label}
      </a>
      {visible && (
        <span className={`cite-preview ${above ? 'cite-preview--above' : 'cite-preview--below'}`}>
          <span className="cite-preview-quote">&ldquo;{quote}&rdquo;</span>
          <span className="cite-preview-source">{label}</span>
        </span>
      )}
    </span>
  );
}
