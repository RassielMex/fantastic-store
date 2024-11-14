import Categories from "./components/home/categories";
import VideoHero from "./components/home/video-hero";
import Welcome from "./components/home/welcome";

export default function Home() {
  return (
    <div>
      <VideoHero />
      <Welcome />
      <Categories />
    </div>
  );
}
