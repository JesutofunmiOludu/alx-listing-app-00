// pages/index.tsx

import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import FilterSection from "@/components/FilterSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FilterSection />
    </Layout>
  );
}
