export default function VideoHero() {
  return (
    <section className="">
      <video width="full" height="full" autoPlay muted loop preload="auto">
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
