interface TwitchClipProps {
  slug: string;
}

export default function TwitchClip({ slug }: TwitchClipProps) {
  const src = `https://clips.twitch.tv/embed?clip=${slug}&parent=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`;

  return (
    <div className="embed-container">
      <iframe
        src={src}
        title="Twitch clip"
        allowFullScreen
      />
    </div>
  );
}
