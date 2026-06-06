import Giscus from '@giscus/react';
import { useThemeContext } from '@/contexts/ThemeContext';

export default function Comments() {
  const { theme } = useThemeContext();

  return (
    <section aria-labelledby="comments-heading" className="mt-16">
      <h2 id="comments-heading" className="text-2xl font-heading mb-6">
        Comments
      </h2>
      <Giscus
        repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID!}
        category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY!}
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!}
        mapping={
          (process.env.NEXT_PUBLIC_GISCUS_MAPPING as 'pathname') || 'pathname'
        }
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="en"
        loading="lazy"
      />
    </section>
  );
}
