import About from "./_components/About";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import LatestWorks from "./_components/Latest";
import Navbar from "./_components/Navbar";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <LatestWorks />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
