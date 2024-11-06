import { FeaturedWorkSection } from "./ui/featuredWorkSection/featured-work-section";
import { HeroSection } from "./ui/hero-section";
import { PostSection } from "./ui/postSection/post-section";

export default function HomePage() {
  return (
    <main className="space-y-8">
      <HeroSection />
      <PostSection />
      <FeaturedWorkSection />
    </main>
  );
}
