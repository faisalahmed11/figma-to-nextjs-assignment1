import { FeaturedWorkSection } from "./ui/featuredWorkSection/featured-work-section";
import { HeroSection } from "./ui/hero-section";
import { PostSection } from "./ui/postSection/post-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PostSection />
      <FeaturedWorkSection />
    </main>
  );
}
