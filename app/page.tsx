import About from "@/components/About";
import Accomodation from "@/components/Accomodation";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Destinations from "@/components/Destinations";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-zinc-50 text-slate-900">
      <Hero />
      <About />
      <WhyUs />
      <Destinations />
      <Packages />
      <Accomodation />
      <Gallery />
      <Testimonials />
      <CTA />
      <ContactForm />
    </main>
  );
}
