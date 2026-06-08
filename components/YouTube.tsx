interface YouTubeProps {
  id: string;
  start?: number;
}

export default function YouTube({ id, start }: YouTubeProps) {
  const src = `https://www.youtube-nocookie.com/embed/${id}${start ? `?start=${start}` : ''}`;

  return (
    <div className="embed-container">
      <iframe
        src={src}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
