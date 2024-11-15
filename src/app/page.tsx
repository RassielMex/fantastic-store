import Categories from "./ui/home/categories";
import Trending from "./ui/home/trending";
import VideoHero from "./ui/home/video-hero";
import Welcome from "./ui/home/welcome";
import Subscribe from "./ui/home/subscribe";

export default function Home() {
  return (
    <div>
      <VideoHero />
      <Welcome />
      <Categories />
      <Trending />
      <Subscribe />
    </div>
  );
}
