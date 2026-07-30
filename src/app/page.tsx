import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Objections } from "@/components/Objections";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/HowItWorks";
import { Audiences } from "@/components/Audiences";
import { AppTeaser } from "@/components/AppTeaser";
import { Survey } from "@/components/Survey";
import { Testimonials } from "@/components/Testimonials";
import { RepairVsReplace } from "@/components/RepairVsReplace";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Objections />
        <Services />
        <Pricing />
        <HowItWorks />
        <Audiences />
        <AppTeaser />
        <Survey />
        <Testimonials />
        <RepairVsReplace />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
