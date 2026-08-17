import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Highlights } from "@/components/site/highlights";
import { Treatments } from "@/components/site/treatments";
import { Experience } from "@/components/site/experience";
import { Gallery } from "@/components/site/gallery";
import { Location } from "@/components/site/location";
import { Reviews } from "@/components/site/reviews";
import { Booking } from "@/components/site/booking";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Highlights />
        <Treatments />
        <Experience />
        <Gallery />
        <Location />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
