import ContactForm from "@/components/ContactForm";
import FeatureCarousel from "@/components/FeatureCarousel";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import PortfolioGrid from "@/components/PortfolioGrid";
import Timeline from "@/components/Timeline";
import Profil from "@/components/Profile";
import { TypographyTable } from "@/components/typo";

export default function Home() {
  return (
    <>
      <Hero />
      <Profil />
      <FeatureCarousel />
      <TypographyTable />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <ContactForm />
      <NewsletterSubscribe />
    </>
  )
}

