interface YouTubeProps {
  id: string;
  start?: number;
  description?: string;
}

export default function YouTube({
  id,
  start,
  description,
}: YouTubeProps) {
  const src = `https://www.youtube-nocookie.com/embed/${id}${start != null ? `?start=${start}` : ''}`;

  return (
    <>
      <div className="embed-container">
        <iframe
          src={src}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </>
  );
}
