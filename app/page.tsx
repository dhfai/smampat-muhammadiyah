import ContactForm from "@/components/ContactForm";
import FeatureCarousel from "@/components/FeatureCarousel";
import Marquee from "@/components/Marquee";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import PortfolioGrid from "@/components/PortfolioGrid";
import Timeline from "@/components/Timeline";
import Profil from "@/components/Profile";
import { TypographyTable } from "@/components/typo";
import { HeroSection } from "@/components/utils/Hero";

export default function Home() {
  return (
    <>
      {/* <Marquee /> */}
      <HeroSection />
      <Profil />
      <FeatureCarousel />
      <TypographyTable />
      <PortfolioGrid />
      <Timeline />
      <ContactForm />
      <NewsletterSubscribe />
    </>
  )
}

