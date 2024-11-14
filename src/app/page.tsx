import Categories from "./ui/home/categories";
import VideoHero from "./ui/home/video-hero";
import Welcome from "./ui/home/welcome";

export default function Home() {
  return (
    <div>
      <VideoHero />
      <Welcome />
      <Categories />
    </div>
  );
}
