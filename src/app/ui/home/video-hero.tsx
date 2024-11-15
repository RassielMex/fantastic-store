export default function VideoHero() {
  return (
    <section className="sticky top-0 -z-10 opacity-65">
      <video autoPlay muted loop preload="auto">
        <source src="/videos/home.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
