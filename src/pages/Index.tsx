import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import SupportedFileTypes from "@/components/SupportedFileTypes";
import ArticleSection from "@/components/ArticleSection";
import ProductNarrativeSection from "@/components/ProductNarrativeSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import SeoHead from "@/components/SeoHead";
import { absoluteUrl } from "@/config/product";
import { homepageSchema } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";
import { useEffect } from "react";
import { homepageFaqs } from "@/content/homepageFaqs";
import RoiCalculator from "@/components/RoiCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  useEffect(() => {
    trackEvent("homepage_viewed", {
      landing_page: "/",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="AI Photo Organizer for Windows | Galoria AI"
        description="Galoria organizes screenshots, camera photos, and mixed image folders on Windows with local analysis, exact destination previews, and undo."
        canonical={absoluteUrl()}
        schema={homepageSchema(homepageFaqs)}
      />
      <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ProductNarrativeSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SupportedFileTypes />
      <AnalyticsSection event="demo_section_reached">
        <DemoSection />
      </AnalyticsSection>
      <TestimonialsSection />
      <RoiCalculator />
      <FAQSection />
      <AnalyticsSection event="pricing_section_viewed">
        <PricingSection />
      </AnalyticsSection>
      <ArticleSection />
      <Footer />
      </main>
    </div>

  );
};

export default Index;

