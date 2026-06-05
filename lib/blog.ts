import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostMetadata {
  title: string;
  date: string;
  dateLabel: string;
  description: string;
  slug: string;
  tags: string[];
  category: string;
  readingTime: string;
  featured?: boolean;
}

export interface Post extends PostMetadata {
  content: string;
}

function computeReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min`;
}

const TAG_CATEGORY_MAP: Record<string, string> = {
  engineering: 'Tech', frontend: 'Tech', accessibility: 'Tech',
  'design-systems': 'Tech', 'state-management': 'Tech', performance: 'Tech',
  collaboration: 'Tech', crdt: 'Tech', career: 'Tech', design: 'Tech',
  photography: 'Tech', games: 'Hobbies', retro: 'Hobbies', 'pixel-art': 'Hobbies',
  homelab: 'Hobbies', 'self-hosting': 'Hobbies', docker: 'Hobbies',
  family: 'Family', personal: 'Family',
};

function inferCategory(tags: string[]): string {
  for (const tag of tags) {
    const cat = TAG_CATEGORY_MAP[tag];
    if (cat) return cat;
  }
  return 'General';
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''));
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const dateString =
    typeof data.date === 'string' ? data.date : data.date.toISOString().split('T')[0];
  const tags: string[] = Array.isArray(data.tags) ? data.tags : [];
  const category: string = data.category || inferCategory(tags);

  return {
    slug: realSlug,
    content,
    title: data.title,
    date: dateString,
    dateLabel: format(new Date(dateString), 'MMM d, yyyy'),
    description: data.description,
    tags,
    category,
    readingTime: computeReadingTime(content),
    featured: data.featured ?? false,
  };
}

export function getAllPosts(): PostMetadata[] {
  return getAllPostSlugs()
    .map(slug => {
      const post = getPostBySlug(slug);
      const { content: _, ...meta } = post;
      return meta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
