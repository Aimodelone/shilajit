// app/page.tsx

import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Divider from './components/Divider';
import AboutSection from './components/AboutSection';
import ShopSection from './components/ShopSection';
import WhyUsSection from './components/WhyUsSection';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import BrandSection from './components/BrandSection';
import BlogSection from './components/BlogSection';
import InstagramSection from './components/InstagramSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <Divider />
      <AboutSection />
      <ShopSection />
      <WhyUsSection />
      <TestimonialSection />
      <PricingSection />
      <BrandSection />
      <BlogSection />
      <InstagramSection />
    </main>
  );
}
